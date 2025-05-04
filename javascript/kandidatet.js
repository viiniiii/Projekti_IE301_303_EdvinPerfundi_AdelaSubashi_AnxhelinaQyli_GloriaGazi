//Ikona e menuse
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
      navbar.classList.remove('active');
  }
});

document.getElementById('logo').addEventListener('click', () => {
  window.location.href = "../html/home.html";
})

function searchCandidates() {
  let searchTerm = document.getElementById('searchBar').value.toLowerCase();
  let kandidatet = document.querySelectorAll('.kandidatet');
  let joRezultat = document.getElementById('paRezultat');

  let resultsFound = false;

  kandidatet.forEach(kandidati => {
    let emriKandidatit = kandidati.dataset.name.toLowerCase();
    let rajoniKandidatit  = kandidati.dataset.region.toLowerCase();
    
  // Kerkimi per emrin ose rajonin per te shfaqur kandidatin
    if (emriKandidatit.includes(searchTerm) || rajoniKandidatit.includes(searchTerm)) {
      kandidati.style.display = 'flex'; 
      resultsFound = true;
    } else {
      kandidati.style.display = 'none'; 
    }
  });

  // Kontrolli nese ka rezultate
  if (resultsFound) {
    joRezultat.style.display = 'none';
  } else {
    joRezultat.style.display = 'block';
  }
}