const ctx = document.getElementById('voteChart').getContext('2d');
const labels = ['Arta Rama', 'Bledi Hoxha', 'Azim Gjoni', 'Hëna Kona', 'Aida Tafa']; // Emrat e kandidatëve
const colors = ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#27ae60']; // Ngjyrat për secilin kandidat

// Të dhënat e votave sipas zonave
let voteDataByZone = {
  all: [40, 35, 25, 20, 30],
  tirana: [25, 30, 15, 10, 22],
  // ...
};

// Ndërtimi i grafikës
let voteChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Numri i Votave',
      data: voteDataByZone['all'], // Të dhënat fillestare
      backgroundColor: colors,
      borderRadius: 10
    }]
  },
  options: {
    plugins: {
      datalabels: {
        color: '#000',
        anchor: 'end',
        align: 'top',
        font: { weight: 'bold' },
        formatter: (value) => value
      }
    },
    responsive: true,
    animation: { duration: 1500 },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 }
      }
    }
  }
});

//per menune
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