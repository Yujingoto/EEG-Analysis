(function () {
  // 見出しレベル（h2,h3）だけ拾う。h1はページタイトル扱い
  var headings = Array.from(document.querySelectorAll("main h2, main h3"));
  if (!headings.length) return;

  // idが無い見出しに自動付与（kramdownが付けるけど保険）
  headings.forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent.trim()
        .toLowerCase()
        .replace(/[^\w\u00C0-\u9FA5ぁ-んァ-ヶ一-龠々ー]/g, "-")
        .replace(/-+/g, "-");
    }
  });
  function buildToc() {
    var ul = document.createElement("ul"); ul.className = "toc-list";
    var cur = ul, last = 2;
    headings.forEach(function (h) {
      var lvl = Number(h.tagName.slice(1)); var li = document.createElement("li");
      var a = document.createElement("a"); a.href = "#" + h.id; a.textContent = h.textContent; li.appendChild(a);
      if (lvl > last) { var nested = document.createElement("ul"); cur.lastElementChild && cur.lastElementChild.appendChild(nested); cur = nested; }
      else if (lvl < last) { cur = cur.parentElement.closest("ul") || ul; }
      cur.appendChild(li); last = lvl;
    });
    return ul;
  }

  // 上部ボックス目次（常に出す）
  var top = document.getElementById("toc-top");
  if (top) top.appendChild(buildToc());

  // 右サイドは PC のみ
  var mq = window.matchMedia("(min-width: 1100px)");
  var side = document.getElementById("toc-side");

  function mountSide() {
    if (!side) return;
    side.innerHTML = "";
    if (mq.matches) {
      var title = document.createElement("div"); title.className = "toc-side-title"; title.textContent = "目次";
      side.appendChild(title); side.appendChild(buildToc());
    }
  }
  mountSide();
  mq.addEventListener ? mq.addEventListener("change", mountSide) : mq.addListener(mountSide);
})();