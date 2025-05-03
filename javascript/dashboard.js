const njoftimet = [
    {
        dataNisjes: new Date("2025-04-15"),
        dataPerfundimit: new Date("2025-04-15"),
        permbajtja: "Publikimi i listës së votuesve të regjistruar"
    },
    {
        dataNisjes: new Date("2025-04-20"),
        dataPerfundimit: new Date("2025-04-20"),
        permbajtja: "Fillon fushata për kandidatët në zgjedhjet lokale"
    },
    {
        dataNisjes: new Date("2025-04-28"),
        dataPerfundimit: new Date("2025-04-28"),
        permbajtja: "Debati i parë televiziv midis kandidatëve për kryetar bashkie"
    },
    {
        dataNisjes: new Date("2025-05-05"),
        dataPerfundimit: new Date("2025-05-05"),
        permbajtja: "Takim informues rreth rregullove për të votuar"
    },
    {
        dataNisjes: new Date("2025-05-10"),
        dataPerfundimit: new Date("2025-05-10"),
        permbajtja: "Afati i fundit për aplikimin e votimit nga shtëpia"
    },
    {
        dataNisjes: new Date("2025-05-11"),
        dataPerfundimit: new Date("2025-05-11"),
        permbajtja: "Zgjedhjet vendore"
    },
    {
        dataNisjes: new Date("2025-05-12"),
        dataPerfundimit: new Date("2025-05-14"),
        permbajtja: "Numerimi i votave"
    },
    {
        dataNisjes: new Date("2025-05-15"),
        dataPerfundimit: new Date("2025-05-15"),
        permbajtja: "Publikimi i rezultateve paraprake"
    },
    {
        dataNisjes: new Date("2025-05-20"),
        dataPerfundimit: new Date("2025-05-22"),
        permbajtja: "Shqyrtimi i ankesave dhe rinumërimet e mundshme"
    },
    {
        dataNisjes: new Date("2025-05-25"),
        dataPerfundimit: new Date("2025-05-25"),
        permbajtja: "Publikimi i rezultateve përfundimtare"
    },
];

//ngarkim te dhenash
shfaqPerdoruesin();
shfaqNjoftimet();
shfaqKalendarin();

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

function shfaqPerdoruesin() {
    const perdoruesi = {
        emri: "Edvin", 
        statusi: "Votues i verifikuar",
    };
    
    document.getElementById('emriPerdoruesit').textContent = perdoruesi.emri;
    document.getElementById('statusiPerdoruesit').textContent = perdoruesi.statusi;
}

function shfaqNjoftimet() {
    const listaNjoftimeve = document.getElementById('listaNjoftimeve');
    listaNjoftimeve.innerHTML = '';
    
    for(let njoftimi of njoftimet){
        //qe te shfaqen vetem ato njoftime qe nuk u ka kaluar data
        if (!dateAktuale(njoftimi.dataPerfundimit)){
            continue
        }

        const dataNisjes = njoftimi.dataNisjes.toLocaleDateString('sq-AL');
        const dataPerfundimit = njoftimi.dataPerfundimit.toLocaleDateString('sq-AL');

        const njoftim = document.createElement('div');
        njoftim.classList.add("njoftim"); 
        //Sepse nenkuptohet qe mbaron ne te njejten dite kur nuk e vendosim daten e mbarimit
        if(dataNisjes === dataPerfundimit){
            njoftim.innerHTML = `<p>${njoftimi.permbajtja} | <b>${dataNisjes}</b></p>`;
        }else{
            njoftim.innerHTML = `<p>${njoftimi.permbajtja} | <b>${dataNisjes} - ${dataPerfundimit}</b></p>`;
        }
        listaNjoftimeve.appendChild(njoftim);
    }
}

function dateAktuale(data) {
    return data >= new Date();
}

function shfaqKalendarin() {
    const kalendarElementi = document.getElementById('kalendari');
    
    const kalendari = new FullCalendar.Calendar(kalendarElementi, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        eventClick: function(info) {
            alert(`Eventi: ${info.event.title}\nData: ${info.event.start.toDateString()}`);
        }
    });
    
    for(let njoftimi of njoftimet){
        kalendari.addEvent(
            {
                title: njoftimi.permbajtja,
                start: njoftimi.dataNisjes.toISOString().split('T')[0],
                end: njoftimi.dataPerfundimit.toISOString().split('T')[0],                
                color: '#2e3b2f'
            }
        );
    }

    kalendari.render();
}

// per navigim duke klikuar butonat
document.querySelector('#krijoVotim').addEventListener('click', function() {
    window.location.href = 'krijoVotim.html';
});

document.querySelector('#kerkoRezultatet').addEventListener('click', function() {
    window.location.href = 'rezultatet.html';
});

document.querySelector('#ndryshoProfili').addEventListener('click', function() {
    window.location.href = 'ndryshoProfili.html';
});

document.querySelector('#kerkoInfo').addEventListener('click', function() {
    window.location.href = 'faq.html';
});
