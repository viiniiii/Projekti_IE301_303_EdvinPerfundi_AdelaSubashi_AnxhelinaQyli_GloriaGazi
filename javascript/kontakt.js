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

// Marrja e elementeve të formularit
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
const phoneInput = document.getElementById('phone');
const countryCode = document.getElementById('countryCode');
const phoneError = document.getElementById('phoneError');

// Eventi kur përdoruesi dërgon formularin
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Verifikimi nëse numri i telefonit ka midis 6 dhe 12 shifra
  const phonePattern = /^\d{6,12}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.style.display = 'block';
    return;
  } else {
    phoneError.style.display = 'none';
  }

  // Mesazh për dërgim
  formResponse.style.color = 'black';
  formResponse.innerText = 'Duke dërguar...';

  // Simulimi i dërgimit të të dhënave (ruajtje në localStorage)
  setTimeout(() => {
    const newMessage = {
      name: form.name.value,
      email: form.email.value,
      phone: countryCode.value + form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
      time: new Date().toLocaleString()
    };

    // Ruajtja në localStorage për demonstrim
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Pastrimi i formularit dhe mesazhi i konfirmimit
    form.reset();
    formResponse.style.color = '#2ecc71';
    formResponse.innerText = '✅ Mesazhi u dërgua me sukses!';
  }, 2000);
});