
// Populate Unit Cards with custom unit titles
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const unitTitles = ["B12", "B13", "C34", "C35", "E25", "E26", "F41", "F42"];

  unitTitles.forEach((title, index) => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <img src="Unit${index + 1}.png" alt="Unit ${title}"/>
      <h3>${title}</h3>
      <p>$${1000 + (index + 1) * 25}/mo • Retail/Office</p>
      <div class="card-buttons">
        <a class="view-btn" href="#">View</a>
        <a class="apply-btn" href="#">Apply</a>
      </div>
    `;
    carousel.appendChild(card);
  });
});
