
function showDetail(phase) {
  const detail = document.getElementById('timeline-detail');
  switch (phase) {
    case 'design': detail.innerText = 'Design & Planning Phase'; break;
    case 'demolition': detail.innerText = 'Demolition and Foundation Work'; break;
    case 'interior': detail.innerText = 'Interior Construction'; break;
    case 'finishing': detail.innerText = 'Finishing and Inspections'; break;
  }
}
