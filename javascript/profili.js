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

// Funksioni i marrje se te dhenave e formularit dhe i shfaq si tekst
document.addEventListener('DOMContentLoaded', function() {
  const emri = "Gloria Gazi";
  const email = "gloriagazi@example.com";
  const telefon = "123-3456789";
  const gjinia = "Femer";
  const datelindja = "22-12-2003";
  const fjalekalimi = "**";
  
// Shfaqja e te dhenave ne formen e tekstit
  const profiliDiv = document.getElementById('profiliTekst');
  profiliDiv.innerHTML = `
    <div class="profil-container">
      <h2>Profili im</h2>
      <p><strong>Emri:</strong> ${emri}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Numri i telefonit:</strong> ${telefon}</p>
      <p><strong>Gjinia:</strong> ${gjinia}</p>
      <p><strong>Datëlindja:</strong> ${datelindja}</p>
      <p><strong>Fjalëkalimi:</strong> ${fjalekalimi}</p>
      <a href="./ndryshoProfili.html" class="buton-edito">Edito profilin</a>
    </div>
  `;
});