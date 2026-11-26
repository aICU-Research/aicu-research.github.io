for (const id of ['supporters-grid', 'team-grid']) {
  const grid = document.getElementById(id);
  if (!grid) continue;
  const items = Array.from(grid.children).map(el => ({el, key: Number(el.dataset.order || 9999) + Math.random() / 1000}));
  items.sort((a,b) => a.key-b.key).forEach(({el}) => grid.appendChild(el));
}
const grid = document.getElementById('activity-grid');
if (grid) {
  const cards = Array.from(grid.querySelectorAll('[data-activity-type]'));
  const type = document.getElementById('activity-type');
  const year = document.getElementById('activity-year');
  const empty = document.getElementById('activity-empty');
  for (const value of [...new Set(cards.map(c => c.dataset.activityYear))].sort().reverse()) {
    year.add(new Option(value, value));
  }
  for (const value of new Set(cards.map(c => c.dataset.activityType))) {
    if (![...type.options].some(o => o.value === value)) type.add(new Option(value, value));
  }
  function filter() {
    let count = 0;
    for (const card of cards) {
      card.hidden = Boolean((type.value && card.dataset.activityType !== type.value) || (year.value && card.dataset.activityYear !== year.value));
      if (!card.hidden) count++;
    }
    empty.hidden = count !== 0;
  }
  type.addEventListener('change', filter);
  year.addEventListener('change', filter);
  document.getElementById('activity-filters').hidden = false;
  filter();
}
