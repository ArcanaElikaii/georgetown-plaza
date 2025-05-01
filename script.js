
function scrollUnits(direction) {
  const container = document.querySelector('.carousel');
  container.scrollBy({ left: direction * 300, behavior: 'smooth' });
}

function showDetail(phase) {
  const detail = document.getElementById('timeline-detail');
  let text = '';
  switch (phase) {
    case 'design': text = 'Design & Planning phase description.'; break;
    case 'demolition': text = 'Demolition & prep work.'; break;
    case 'interior': text = 'Interior remodeling and systems install.'; break;
    case 'finishing': text = 'Final touches and inspection.'; break;
  }
  detail.innerHTML = `<p>${text}</p>`;
}
