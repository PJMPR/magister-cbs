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
  const planFilters = [...document.querySelectorAll('[data-plan-filter]')];
  const cards = [...document.querySelectorAll('[data-module]')];
  const empty = document.querySelector('[data-empty]');
  let activeFilter = 'all';
  let activePlanFilter = 'plan';

  const updateModules = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase('pl');
    let visible = 0;
    cards.forEach((card) => {
      const semester = card.dataset.semester || '';
      const semesterOrder = ['I', 'II', 'III', 'IV'];
      const [rangeStart, rangeEnd] = semester.split('–');
      const startIndex = semesterOrder.indexOf(rangeStart);
      const endIndex = semesterOrder.indexOf(rangeEnd);
      const activeIndex = semesterOrder.indexOf(activeFilter);
      const matchesRange = endIndex >= startIndex && startIndex >= 0 && activeIndex >= startIndex && activeIndex <= endIndex;
      const matchesFilter = activeFilter === 'all' || semester === activeFilter || matchesRange;
      const matchesQuery = (card.dataset.search || '').includes(query);
      const matchesPlan = activePlanFilter === 'all' || (activePlanFilter === 'plan' && card.dataset.inPlan === 'true') || (activePlanFilter === 'variants' && card.dataset.inPlan === 'false');
      const show = matchesFilter && matchesQuery && matchesPlan;
      const ectsValue = card.querySelector('[data-ects-value]');
      const ectsContext = card.querySelector('[data-ects-context]');
      const semesterEctsKeys = { I: 'ectsI', II: 'ectsIi', III: 'ectsIii', IV: 'ectsIv' };
      const semesterEctsKey = semesterEctsKeys[activeFilter];
      const semesterEcts = card.dataset[semesterEctsKey];
      if (ectsValue) ectsValue.textContent = activeFilter !== 'all' && semesterEcts ? semesterEcts : card.dataset.ectsTotal;
      if (ectsContext) ectsContext.textContent = activeFilter !== 'all' ? ' w semestrze' : ' łącznie';
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
  planFilters.forEach((button) => button.addEventListener('click', () => {
    activePlanFilter = button.dataset.planFilter || 'plan';
    planFilters.forEach((item) => item.classList.toggle('active', item === button));
    updateModules();
  }));
  updateModules();

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

