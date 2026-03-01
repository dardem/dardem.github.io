/* nav.js — injects shared navigation */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',    label: 'Home' },
    { href: 'bio.html',      label: 'Bio' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'papers.html',   label: 'Papers' },
    { href: 'teaching.html', label: 'Teaching' },
    { href: 'interests.html',label: 'Interests' },
  ];

  const navHTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__brand">Daryna Dementieva</a>
    <ul class="nav__links" id="navLinks">
      ${pages.map(p => `<li><a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
    </ul>
    <div class="nav__toggle" id="navToggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;


  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile toggle
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
})();
