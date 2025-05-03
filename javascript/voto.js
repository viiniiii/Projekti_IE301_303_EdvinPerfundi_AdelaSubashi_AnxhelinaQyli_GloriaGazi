document.addEventListener("DOMContentLoaded", () => {
  const formaVotimit = document.getElementById("formaVotimit");
  const msgKonfirmimi = document.getElementById("msgKonfirmimi");
  const radioContainer = document.getElementById("kandidatRadioContainer");

  // Lista e kandidatëve
  const kandidatet = [
    "Arta Rama",
    "Bledi Hoxha",
    "Azim Gjoni",
    "Hëna Kona",
    "Aida Tafaj"
  ];

  // Gjenerimi dinamik i radio buttons
  kandidatet.forEach((emri) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "kandidat";
    radio.value = emri;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + emri));
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
  });

  // Kontrolli kur plotesohet forma
  formaVotimit.addEventListener("submit", function (event) {
    event.preventDefault();

    const emri = document.getElementById("emri").value.trim();
    const mbiemri = document.getElementById("mbiemri").value.trim();
    const nrID = document.getElementById("nrID").value.trim();
    const email = document.getElementById("email").value.trim();
    const kandidat = document.querySelector('input[name="kandidat"]:checked');

    if (!emri || !mbiemri || !nrID || !email || !kandidat) {
      msgKonfirmimi.innerText = "Ju lutem plotësoni të gjitha fushat!";
      msgKonfirmimi.style.color = "red";
      return;
    }
        // Kontroll nëse ka votuar
    // if (localStorage.getItem("hasVoted") === "true") {
    //   msgKonfirmimi.innerText = "Ju keni votuar më parë!Nuk mund të votoni përsëri";
    //   msgKonfirmimi.style.color = "orange";
    //   return;
    // }
    

    // Drejto përdoruesin në faqen pas votimit
    window.location.href = "../html/mesazhPasVotimi.html";
  });
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