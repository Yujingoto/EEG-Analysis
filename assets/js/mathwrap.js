// すべてのブロック数式を .math-scroll で包む（iOSでも確実に横スクロールにする）
(function () {
  function wrapAll() {
    var blocks = document.querySelectorAll('mjx-container[display="true"]');
    blocks.forEach(function (m) {
      var p = m.parentElement;
      if (p && p.classList && p.classList.contains('math-scroll')) return; // 既に包んでいる
      var w = document.createElement('div');
      w.className = 'math-scroll';
      m.parentNode.insertBefore(w, m);
      w.appendChild(m);
    });
  }

  // MathJax の typeset 完了後に実行
  if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
    MathJax.startup.promise.then(wrapAll);
  } else {
    // 念のため
    window.addEventListener('load', wrapAll);
  }
})();
