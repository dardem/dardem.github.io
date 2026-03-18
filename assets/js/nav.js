/* nav.js — injects shared navigation */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'bio.html',           label: 'Bio' },
    { href: 'projects.html',      label: 'Projects' },
    { href: 'talks.html',         label: 'Talks and Interviews' },
    { href: 'papers.html',        label: 'Papers' },
    { href: 'teaching.html',      label: 'Teaching' },
    { href: 'third_mission.html', label: 'Third Mission' },
    { href: 'interests.html',     label: 'Interests' },
  ];

  const navHTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__brand">Dr. Daryna Dementieva</a>
    <ul class="nav__links" id="navLinks">
      ${pages.map(p => `<li><a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
    </ul>
    <button class="nav__toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  // Open / close menu
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close when a nav link is tapped (single-page feel)
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when user taps outside the nav
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav')) {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
