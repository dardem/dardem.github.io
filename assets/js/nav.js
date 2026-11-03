/* nav.js — injects shared navigation + footer */
(function () {
  // Site root, derived from where this script lives (assets/js/nav.js),
  // so the menu also works from pages in sub-folders such as blog/.
  const script = document.currentScript;
  const root = script ? script.src.replace(/assets\/js\/nav\.js.*$/, '') : '';
  const path = window.location.pathname;
  const currentPage = path.split('/').pop() || 'index.html';
  const inBlog = /\/blog\//.test(path);

  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'bio.html',           label: 'Bio' },
    { href: 'news.html',          label: 'News' },
    { href: 'papers.html',        label: 'Papers' },
    { href: 'projects.html',      label: 'Projects' },
    { href: 'awards.html',        label: 'Awards' },
    { href: 'talks.html',         label: 'Talks & Interviews' },
    { href: 'teaching.html',      label: 'Teaching' },
    { href: 'third_mission.html', label: 'Third Mission' },
    { href: 'interests.html',     label: 'Interests' },
    { href: 'books.html',         label: 'Books' },
    { href: 'failures.html',      label: 'CV of Failures' },
    { href: 'blog.html',          label: 'Blog' },
  ];

  const isActive = p => (!inBlog && currentPage === p.href) || (inBlog && p.href === 'blog.html');
  const link = p => `<li><a href="${root}${p.href}" class="${isActive(p) ? 'active' : ''}">${p.label}</a></li>`;

  const navHTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="${root}index.html" class="nav__brand">Daryna Dementieva</a>
    <ul class="nav__links" id="navLinks">
      ${pages.map(link).join('')}
    </ul>
    <button class="nav__toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');

  function closeAll() {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.addEventListener('click', e => { if (e.target.tagName === 'A') closeAll(); });
  document.addEventListener('click', e => { if (!e.target.closest('.nav')) closeAll(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

  // ── Footer ──
  const year = new Date().getFullYear();
  const footerHTML = `
<footer class="footer">
  <div class="footer__inner">
    <span class="footer__name">Daryna Dementieva</span>
    <span>
      © ${year} · All rights reserved
      <a href="${root}impressum.html">Impressum &amp; Privacy</a>
      <a href="https://scholar.google.com/citations?user=mLX6olgAAAAJ" target="_blank" rel="noopener">Scholar</a>
      <a href="https://www.linkedin.com/in/daryna-dementieva/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${root}assets/files/CV.pdf" target="_blank" rel="noopener">CV</a>
    </span>
  </div>
</footer>`;
  const addFooter = () => document.body.insertAdjacentHTML('beforeend', footerHTML);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addFooter);
  else addFooter();

  // ── In-page menu: highlight the section currently in view ──
  document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = Array.from(document.querySelectorAll('.page-menu a[href^="#"]'));
    if (!menuLinks.length || !('IntersectionObserver' in window)) return;
    const byId = new Map(menuLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          menuLinks.forEach(a => a.classList.remove('is-current'));
          const a = byId.get(en.target.id);
          if (a) a.classList.add('is-current');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    byId.forEach((_, id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
  });
})();
