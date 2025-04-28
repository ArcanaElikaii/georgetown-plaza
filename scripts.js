
function scrollUnits(direction) {
  const carousel = document.getElementById('unitCarousel');
  const scrollAmount = 340;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
