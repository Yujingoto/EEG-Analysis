<script>
(() => {
  const $q = document.getElementById('q');
  const $out = document.getElementById('q-result');
  if (!$q || !$out) return;

  let DB = [];
  fetch('{{ "/search.json" | relative_url }}')
    .then(r => r.json()).then(j => DB = j).catch(()=>{});

  const norm = s => (s||"").toLowerCase();
  const makeSnippet = (text, q) => {
    const i = text.indexOf(q);
    if (i < 0) return text.slice(0, 120) + '…';
    const start = Math.max(0, i - 40), end = Math.min(text.length, i + q.length + 40);
    return (start? '…':'') + text.slice(start, end) + (end<text.length? '…':'');
  };

  const search = (q) => {
    if (!q.trim()) { $out.hidden = true; $out.innerHTML = ''; return; }
    const terms = q.trim().toLowerCase().split(/\s+/);
    const hits = DB.filter(d => {
      const hay = (d.title + ' ' + d.content).toLowerCase();
      return terms.every(t => hay.includes(t));
    }).slice(0, 20);

    $out.innerHTML = hits.map(h => `
      <a class="hit" href="${h.url}">
        <div class="t">${h.title}</div>
        <div class="s">${makeSnippet(h.content, terms[0])}</div>
      </a>
    `).join('') || '<div class="nohit">見つかりませんでした</div>';
    $out.hidden = false;
  };

  let tid; $q.addEventListener('input', () => {
    clearTimeout(tid); tid = setTimeout(() => search($q.value), 120);
  });
})();
</script>
