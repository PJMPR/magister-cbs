(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu?.classList.toggle('open', !open);
  });

  const search = document.querySelector('[data-module-search]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-module]')];
  const empty = document.querySelector('[data-empty]');
  let activeFilter = 'all';

  const updateModules = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase('pl');
    let visible = 0;
    cards.forEach((card) => {
      const semester = card.dataset.semester || '';
      const matchesFilter = activeFilter === 'all' || semester.split('–').includes(activeFilter) || semester === activeFilter;
      const matchesQuery = (card.dataset.search || '').includes(query);
      const show = matchesFilter && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };

  search?.addEventListener('input', updateModules);
  filters.forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filters.forEach((item) => item.classList.toggle('active', item === button));
    updateModules();
  }));

  const prose = document.querySelector('[data-prose]');
  const toc = document.querySelector('[data-toc]');
  if (prose && toc) {
    const headings = [...prose.querySelectorAll('h2')];
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `sekcja-${index + 1}`;
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent || '';
      toc.appendChild(link);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.12 });
  document.querySelectorAll('.module-card, .stat-grid article, .timeline article').forEach((item) => observer.observe(item));
})();

