let perdoruesit = [
    { email: "anxhelinaqyli@gmail.com", fjalekalimi: "koblenz" },
    { email: "gloriagazi@gmail.com", fjalekalimi: "123456" },
    { email: "edvinperfundi21@gmail.com", fjalekalimi: "161616" },
    { email: "adelasubashi@gmail.com", fjalekalimi: "abcabc" },
];

document.getElementById("butoni").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const fjalekalimi = document.querySelector("#fjalekalimi").value;
    const perdoruesi = gjejPerdoruesin(email, fjalekalimi);
    if (perdoruesi) {
      window.location.href = "dashboard.html"; 
    } else {
        document.getElementById("mesazhGabimi").innerText = "Keni vendosur te dhenat gabim!";
    }
})

//per te shfaqur / fshehur fjalekalimin
let ikona = document.getElementById("ikona");
let inputi = document.getElementById("fjalekalimi");
ikona.addEventListener("click", () => {
    if(ikona.src.includes("fsheh.png")){
        ikona.src = "../media/shfaq.png";
        inputi.type = "text";
    }else{
        ikona.src = "../media/fsheh.png";
        inputi.type = "password";
    }
})

function gjejPerdoruesin(emaili, fjalekalimi){
    for(let i = 0; i < perdoruesit.length; i++){
        if (perdoruesit[i].email === emaili && perdoruesit[i].fjalekalimi === fjalekalimi){
            return perdoruesit[i];
        }
    }
    return null;
}

document.getElementById('logo').addEventListener('click', () => {
    window.location.href = "../html/home.html";
  })