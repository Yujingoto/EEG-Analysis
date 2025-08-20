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

  function buildToc(ulClass) {
    var ul = document.createElement("ul");
    ul.className = ulClass || "";
    var curUl = ul;
    var lastLevel = 2; // h2から開始

    headings.forEach(function (h) {
      var level = Number(h.tagName.substring(1)); // 2 or 3
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);

      if (level > lastLevel) {
        var nested = document.createElement("ul");
        curUl.lastElementChild && curUl.lastElementChild.appendChild(nested);
        curUl = nested;
      } else if (level < lastLevel) {
        // h3 -> h2 に戻る
        curUl = curUl.parentElement.closest("ul") || ul;
      }
      curUl.appendChild(li);
      lastLevel = level;
    });
    return ul;
  }

  var top = document.getElementById("toc-top");
  var side = document.getElementById("toc-side");
  if (top) top.appendChild(buildToc("toc-list"));
  if (side) {
    var title = document.createElement("div");
    title.className = "toc-side-title";
    title.textContent = "目次";
    side.appendChild(title);
    side.appendChild(buildToc("toc-list"));
  }
})();
