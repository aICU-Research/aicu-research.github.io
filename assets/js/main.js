for (const id of ['supporters-grid', 'team-grid']) {
  const grid = document.getElementById(id);
  if (!grid) continue;
  const items = Array.from(grid.children).map(el => ({el, key: Number(el.dataset.order || 9999) + Math.random() / 1000}));
  items.sort((a,b) => a.key-b.key).forEach(({el}) => grid.appendChild(el));
}
const grid = document.getElementById('activity-grid');
const type = document.getElementById('activity-type');
const filters = document.getElementById('activity-filters');
if (grid && type && filters) {
  const cards = Array.from(grid.querySelectorAll('[data-activity-type]'));
  const empty = document.getElementById('activity-empty');
  for (const value of new Set(cards.map(c => c.dataset.activityType))) {
    if (![...type.options].some(o => o.value === value)) type.add(new Option(value, value));
  }
  function filter() {
    let count = 0;
    for (const card of cards) {
      card.hidden = Boolean(type.value && card.dataset.activityType !== type.value);
      if (!card.hidden) count++;
    }
    if (empty) empty.hidden = count !== 0;
  }
  type.addEventListener('change', filter);
  filters.hidden = false;
  filter();
}
