// ブロック数式(mjx-container[display=true])を .math-scroll で包んで横スクロールを有効化
(function () {
  var blocks = document.querySelectorAll('mjx-container[display="true"]');
  if (!blocks.length) return;

  blocks.forEach(function (m) {
    var p = m.parentElement;
    if (p && p.classList && p.classList.contains('math-scroll')) return;

    var wrap = document.createElement('div');
    wrap.className = 'math-scroll';

    // p が段落(<p>)で他のテキストを含まないときは置換、それ以外は直ラップ
    if (p && p.tagName === 'P' && p.textContent.trim() === '') {
      p.parentNode.insertBefore(wrap, p);
      wrap.appendChild(m);
      p.remove();
    } else {
      m.parentNode.insertBefore(wrap, m);
      wrap.appendChild(m);
    }
  });
})();