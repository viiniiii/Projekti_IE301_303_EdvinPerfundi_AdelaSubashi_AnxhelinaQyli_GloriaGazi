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

// JavaScript per ngarkimin e fotos me Drag-and-Drop dhe klikimin
const dropZone = document.getElementById('zonaUpload');
const fileInput = document.getElementById('ngarkoFotografi');
const fotoProfili = document.getElementById('fotoProfili');

// Kur terhiqet nje skedar ne zonen e "drop"
dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('dragging'); // Ndrysho ngjyrën e sfondit
});

// Kur skedari largohet nga zona e "drop"
dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragging'); // Kthe në ngjyrën origjinale
});

// Kur skedari vendoset ne zone
dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('dragging');

  const file = event.dataTransfer.files[0]; 
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fotoProfili.src = e.target.result; 
    };
    reader.readAsDataURL(file);
  }
});

// Kur klikoni mbi zonen e "drop", hapet input-in e skedareve ne menyre manuale
dropZone.addEventListener('click', () => {
  fileInput.click(); 
});

// Kur skedari zgjidhet nga input-i i file
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fotoProfili.src = e.target.result; 
    };
    reader.readAsDataURL(file);
  }
});