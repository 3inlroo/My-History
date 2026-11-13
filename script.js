
// JavaScriptが有効な場合のみアニメーションを適用
document.documentElement.classList.add("js");

// 経歴を取得
const historyItems = document.querySelectorAll(
  ".history-item"
);

// スクロール監視
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        // 画面に入ったら表示
        entry.target.classList.add("is-visible");

        // 一度表示したら監視を終了
        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);

// 経歴を順番に監視
historyItems.forEach((item, index) => {

  // 表示タイミングを少しずつずらす
  item.style.transitionDelay = `${index * 0.12}s`;

  observer.observe(item);

});
