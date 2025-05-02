
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = 300;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
function showDetail(phase) {
  const detailBox = document.getElementById('timeline-detail');
  let detailText = '';
  switch (phase) {
    case 'design':
      detailText = 'Initial concept drawings, stakeholder meetings, and permitting.';
      break;
    case 'demolition':
      detailText = 'Removal of old materials and structural upgrades.';
      break;
    case 'interior':
      detailText = 'Interior framing, drywall, and installations.';
      break;
    case 'finishing':
      detailText = 'Painting, final fixtures, inspections, and tenant prep.';
      break;
  }
  detailBox.textContent = detailText;
}

// Populate Unit Cards (simplified)
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  for (let i = 1; i <= 9; i++) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <img src="Unit${i}.png" alt="Unit ${i}"/>
      <h3>Unit ${i}</h3>
      <p>$${1000 + i * 25}/mo • Retail/Office</p>
      <div class="card-buttons">
        <a class="view-btn" href="#">View</a>
        <a class="apply-btn" href="#">Apply</a>
      </div>
    `;
    carousel.appendChild(card);
  }
});
