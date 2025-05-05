
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
      detailText = 'When we first began managing Georgetown Plaza, it was clear the property had great potential but was in need of some care and reimagining. The buildings had become worn down over time, and we knew it was time to breathe new life into the space. We envisioned a more vibrant and lively plaza—one that would not only look beautiful but also invite people in and create a strong sense of place. We spent time carefully considering how to improve the aesthetic appeal and attract more foot traffic, ultimately drawing inspiration from the charming coastal architecture found in the buildings by the bay in Carmel. This helped shape our new color palette and design direction. To bring our ideas to life, we built a 3D model of the property—available to view above on this site—which allowed us to visualize the transformation and refine the details. With the design in place, we developed a phased renovation plan and officially kicked off the journey to turn this vision into reality.';
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
