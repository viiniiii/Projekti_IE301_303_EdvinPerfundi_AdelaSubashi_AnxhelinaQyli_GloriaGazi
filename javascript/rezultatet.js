const ctx = document.getElementById('voteChart').getContext('2d');
const labels = ['Arta Rama', 'Bledi Hoxha', 'Azim Gjoni', 'Hëna Kona', 'Aida Tafa'];
const colors = ['#3498db', '#2ecc71', '#1abc9c', '#16a085', '#27ae60'];

let voteDataByZone = {
  all: [40, 35, 25, 20, 30],
  tirana: [25, 30, 15, 10, 22],
  durres: [10, 12, 18, 6, 20],
  shkoder: [5, 8, 7, 12, 6],
  vlore: [7, 4, 10, 6, 9],
  elbasan: [8, 9, 5, 11, 7],
  fier: [12, 14, 9, 5, 13],
  korce: [6, 7, 8, 5, 9],
  berat: [4, 5, 6, 5, 6],
  kukes: [2, 4, 3, 2, 5],
  gjirokaster: [3, 2, 4, 3, 4],
  lezhe: [4, 6, 3, 2, 5],
  diber: [3, 2, 2, 1, 3]
};

let voteChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Numri i Votave',
      data: voteDataByZone['all'],
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
        font: {
          weight: 'bold'
        },
        formatter: (value) => value
      }
    },
    responsive: true,
    animation: {
      duration: 1500
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});

function updateChart(zone = 'all') {
  const newData = voteDataByZone[zone] || voteDataByZone['all'];
  voteChart.data.datasets[0].data = newData;
  voteChart.update();
  document.getElementById('totalVotes').textContent = newData.reduce((a, b) => a + b, 0);
}

document.getElementById('refreshBtn').addEventListener('click', () => {
  const currentZone = document.getElementById('zoneFilter').value;
  updateChart(currentZone);
});

document.getElementById('zoneFilter').addEventListener('change', (e) => {
  updateChart(e.target.value);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'rezultatet.png';
  link.href = voteChart.toBase64Image();
  link.click();
});

// Auto refresh every 10 seconds
setInterval(() => {
  const currentZone = document.getElementById('zoneFilter').value;
  updateChart(currentZone);
}, 10000);

updateChart();

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