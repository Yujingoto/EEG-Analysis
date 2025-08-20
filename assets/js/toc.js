// assets/js/toc.js
(function () {
  var headings = Array.from(document.querySelectorAll("main h2, main h3"));
  if (!headings.length) return;

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
      var lvl = Number(h.tagName.slice(1));
      var li = document.createElement("li");
      var a = document.createElement("a"); a.href = "#" + h.id; a.textContent = h.textContent; li.appendChild(a);
      if (lvl > last) { var nest = document.createElement("ul"); cur.lastElementChild && cur.lastElementChild.appendChild(nest); cur = nest; }
      else if (lvl < last) { cur = cur.parentElement.closest("ul") || ul; }
      cur.appendChild(li); last = lvl;
    });
    return ul;
  }

  // 左側の目次：最初の h2 の直前に差し込む（＝タイトル/前書きの後）
  var firstH2 = document.querySelector("main h2");
  if (firstH2) {
    var topBox = document.createElement("nav");
    topBox.className = "toc-box";
    topBox.setAttribute("aria-label", "目次");
    topBox.appendChild(buildToc());
    firstH2.parentNode.insertBefore(topBox, firstH2);
  }

  // 右サイドは従来どおり（PCのみ表示）
  var side = document.getElementById("toc-side");
  if (side) {
    var title = document.createElement("div");
    title.className = "toc-side-title";
    title.textContent = "目次";
    side.innerHTML = "";
    side.appendChild(title);
    side.appendChild(buildToc());
  }
})();
