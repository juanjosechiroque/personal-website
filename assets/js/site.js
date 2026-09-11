(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  const config = window.siteConfig || {};

  document.querySelectorAll('[data-link]').forEach((link) => {
    const url = config[link.dataset.link];
    if (url) {
      link.href = url;
      if (link.hasAttribute('hidden')) link.hidden = false;
      if (link.target === '_blank') link.setAttribute('rel', 'noopener noreferrer');
    } else if (link.dataset.link === 'linkedin') {
      link.remove();
    }
  });
  document.querySelectorAll('[data-year]').forEach((year) => { year.textContent = new Date().getFullYear(); });

  if (!menuButton || !nav) return;
  const isSpanish = document.documentElement.lang === 'es';
  const openLabel = isSpanish ? 'Abrir navegación' : 'Open navigation';
  const closeLabel = isSpanish ? 'Cerrar navegación' : 'Close navigation';
  const setMenuState = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    menuButton.querySelector('.sr-only').textContent = isOpen ? closeLabel : openLabel;
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    setMenuState(false);
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || menuButton.getAttribute('aria-expanded') !== 'true') return;
    setMenuState(false);
    menuButton.focus();
  });
})();
