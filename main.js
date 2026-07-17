// ===== Hamburger menu =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ===== Theme toggle =====
  const themeBtn = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('rehat-theme');
  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (themeBtn) themeBtn.textContent = '☀';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('rehat-theme', 'light');
        themeBtn.textContent = '☾';
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('rehat-theme', 'dark');
        themeBtn.textContent = '☀';
      }
    });
  }

  // ===== Live search on homepage =====
  const searchInput = document.querySelector('.hero-search input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const excerpt = card.querySelector('p').textContent.toLowerCase();
        card.style.display = (title.includes(q) || excerpt.includes(q)) ? 'grid' : 'none';
      });
    });
  }
});
