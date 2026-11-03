/* home.js — fills the home page "News" and "Awards" sections with the first
   entries of news.html and awards.html, so each item is written only once.

   <div id="homeNews"  data-source="news.html"   data-count="5">  ← article.news-card
   <ul  id="homeAwards" data-source="awards.html" data-count="5">  ← li.award
*/
(function () {
  function fill(containerId, itemSelector) {
    const box = document.getElementById(containerId);
    if (!box) return;
    const src = box.dataset.source;
    const count = parseInt(box.dataset.count || '5', 10);

    fetch(src)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        // Commented-out entries are not part of the parsed page, so they are skipped automatically.
        const items = Array.from(doc.querySelectorAll(itemSelector)).slice(0, count);
        if (!items.length) throw new Error('no items');
        box.replaceChildren(...items.map(el => document.importNode(el, true)));
      })
      .catch(() => {
        // e.g. when the page is opened as a local file: show a link instead
        const link = `<a href="${src}">Open the full list →</a>`;
        box.innerHTML = box.tagName === 'UL'
          ? `<li class="award"><span></span><div>${link}</div><span></span></li>`
          : `<p>${link}</p>`;
      });
  }

  fill('homeNews', 'article.news-card');
  fill('homeAwards', 'ul.award-list > li.award');
})();
