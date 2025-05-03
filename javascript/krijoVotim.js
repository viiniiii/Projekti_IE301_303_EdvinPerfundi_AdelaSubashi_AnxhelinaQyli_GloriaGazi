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
// Qe perdoruesi te japi vlere tjeter per daten
const kohezgjatjaSondazhit = document.getElementById('kohezgjatjaSondazhit');
const inputVlereTjeter = document.getElementById('inputVlereTjeter');
kohezgjatjaSondazhit.addEventListener('change', function () {
  if (this.value === 'tjeter') {
    inputVlereTjeter.style.display = 'block';
  } else {
    inputVlereTjeter.style.display = 'none';
  }
});

// Shtim kandidati zgjedhjeje
const butoniShto = document.getElementById('butoniShto');
const kandidatet = document.getElementById('kandidatet');
butoniShto.addEventListener('click', function () {
  const numriKandidateve = kandidatet.children.length;
  const div = document.createElement('div');
  div.className = 'kandidati';
  div.innerHTML = `
    <input type="text" name="kandidatet" placeholder="Kandidati ${numriKandidateve + 1}" required>
    <button type="button" class="butoni-fshi">Fshi</button>
  `;
  kandidatet.appendChild(div);
  updateButonatFshires();
});

// Fshirja e kandidatit
kandidatet.addEventListener('click', function (e) {
  if (e.target.classList.contains('butoni-fshi')) {
    const kandidati = e.target.closest('.kandidati');
    if (kandidati) {
      kandidati.remove();
      updateButonatFshires();
      updateShfaqSondazhin();
    }
  }
});

// Butonat te punojne vetem kur te jene me shume se 3 kandidate
function updateButonatFshires() {
  const butonatFshires = kandidatet.querySelectorAll('.butoni-fshi');
  if (butonatFshires.length <= 2) {
    for(i = 0; i < butonatFshires.length; i++){
      butonatFshires[i].disabled = true;
    }
  } else {
    for(i = 0; i < butonatFshires.length; i++){
      butonatFshires[i].disabled = false;
    }
  }
}

// Zgjedhja e llojit te sondazhit 
const llojiSondazhitInput = document.getElementById('llojiSondazhit');
const llojeteSondazhit = document.querySelectorAll('.lloji-sondazhit-zgjedhje');
for(let i = 0; i < llojeteSondazhit.length; i++){
  llojeteSondazhit[i].addEventListener('click', function() {
    for(let j = 0; j < llojeteSondazhit.length; j++){
      llojeteSondazhit[j].classList.remove('selected');
    }
    this.classList.add('selected');
    llojiSondazhitInput.value = this.getAttribute('data-type');
  })
}

//Shfaqja e sondazhit ne baze te inputeve
const emriSondazhitInput = document.getElementById('emriSondazhit');
const pershkrimiSondazhitInput = document.getElementById('pershkrimiSondazhit');
const kandidatetInput = document.getElementById("kandidatet");
emriSondazhitInput.addEventListener("change", updateShfaqSondazhin);
pershkrimiSondazhitInput.addEventListener("change", updateShfaqSondazhin);
kandidatetInput.addEventListener("change", updateShfaqSondazhin);

function updateShfaqSondazhin() {
  document.getElementById("shfaqTitullin").innerText = capitalizeFirstLetter(emriSondazhitInput.value);
  document.getElementById("shfaqPershkrimin").innerText = capitalizeFirstLetter(pershkrimiSondazhitInput.value);

  const kandidatet = document.querySelectorAll('input[name="kandidatet"]');
  const shfaqKandidatet = document.getElementById("shfaqKandidatet");
  shfaqKandidatet.innerHTML = "";

  const values = [];

  for (let i = 0; i < kandidatet.length; i++) {
    let vlera = kandidatet[i].value.trim();
    if (vlera && !kerkimLinear(vlera, values)) {
      values.push(vlera);
      const Kandidati = document.createElement("div");
      Kandidati.textContent = capitalizeFirstLetter(vlera);
      Kandidati.className = "shfaq-kandidatin";
      shfaqKandidatet.appendChild(Kandidati);
    }
  }
}

function kerkimLinear(vlera, lista) {
  for (let i = 0; i < lista.length; i++) {
    if (vlera.toLowerCase() === lista[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

//kontroll inputesh
document.getElementById("sondazhi").addEventListener("submit", function (e) {
  e.preventDefault();
  const mesazhGabimi = document.getElementById("mesazhGabimi");

  const titulli = document.getElementById("emriSondazhit").value.trim();
  if (titulli.length < 5) {
      mesazhGabimi.innerText = "Titulli duhet të ketë të paktën 5 karaktere.";
      return;
  }
  
  const kohezgjatja = document.getElementById("kohezgjatjaSondazhit").value;
  if (!kohezgjatja) {
      mesazhGabimi.innerText = "Ju lutem zgjidhni kohëzgjatjen e sondazhit.";
      return;
  }
  if (kohezgjatja === "tjeter") {
      const vlera = document.getElementById("percaktimGjatesie").value;
      if (!vlera || isNaN(vlera) || vlera < 1 || vlera > 365) {
          mesazhGabimi.innerText = "Ju lutem vendosni një numër të vlefshëm ditësh (1-365).";
          return;
      }
  }

  const kandidatetInput = document.querySelectorAll("#kandidatet input[name='kandidatet']");
  const kandidatet = [];
  for (let i = 0; i < kandidatetInput.length; i++) {
      const vlera = kandidatetInput[i].value.trim();
      if (vlera !== "" && !kerkimLinear(vlera, kandidatet)) {
        kandidatet.push(vlera);
      }
  }
  
  if (kandidatet.length < 2) {
      mesazhGabimi.innerText = "Ju lutem jepni të paktën dy kandidate unike votimi.";
      return;
  }
  
  mesazhGabimi.innerText = "";
  alert("Sondazhi u krijua me sukses!");
  this.submit();
});