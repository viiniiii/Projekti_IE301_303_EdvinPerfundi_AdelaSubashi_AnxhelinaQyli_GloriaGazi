//kontroll inputesh
document.getElementById("butoni").addEventListener("click", (e) => {
    e.preventDefault(); 
    const mesazhGabimi = document.getElementById("mesazhGabimi");

    const emri = document.getElementById("name").value.trim();
    const emriRegex = /^[a-zA-Z]{3,}/;
    if (!emriRegex.test(emri)) {
        mesazhGabimi.innerText = "Emri duhet të ketë të paktën 3 shkronja.";
        return;
    }

    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        mesazhGabimi.innerText = "Email-i nuk është në formatin e duhur.";
        return;
    }

    const telefon = document.getElementById("telefon").value.trim();
    const telefonRegex = /^[0-9]{3}-[0-9]{7}$/;
    if (!telefonRegex.test(telefon)) {
        mesazhGabimi.innerText = "Numri i telefonit duhet të jetë në formatin 123-4567890.";
        return;
    }
    
    const gjinia = document.querySelector('input[name="gjinia"]:checked')?.value;
    if (!gjinia) {
        mesazhGabimi.innerText = "Ju lutem zgjidhni gjininë.";
        return;
    }

    const datelindja = document.getElementById("datelindja").value;
    const moshaPerdoruesit = llogaritMoshen(datelindja);
    if (!datelindja || moshaPerdoruesit < 18) {
        mesazhGabimi.innerText = "Duhet të jeni mbi 18 vjeç!";
        return;
    }

    const fjalekalimi = document.getElementById("fjalekalimi").value;
    const konfirmoFjalekalimin = document.getElementById("konfirmoFjalekalimin").value;
    
    const fjalekalimiRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!fjalekalimiRegex.test(fjalekalimi)) {
        mesazhGabimi.innerText = "Fjalëkalimi nuk përmbush kërkesat e sigurisë.";
        return;
    }

    if (fjalekalimi !== konfirmoFjalekalimin) {
        mesazhGabimi.innerText = "Fjalëkalimet nuk përputhen!";
        return;
    }

    window.location.href = "dashboard.html";
});

function llogaritMoshen(datelindja) {
    var dataSotme = new Date();
    var dateLindja = new Date(datelindja);
    var mosha = dataSotme.getFullYear() - dateLindja.getFullYear();
    var differencaMujore = dataSotme.getMonth() - dateLindja.getMonth();
    if (differencaMujore < 0 || (differencaMujore === 0 && dataSotme.getDate() < dateLindja.getDate())) {
        mosha--;
    }
    return mosha;
}

document.getElementById('logo').addEventListener('click', () => {
    window.location.href = "../html/home.html";
  })