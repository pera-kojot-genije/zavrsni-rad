const eid = selektor => document.getElementById(selektor)

const username = eid('username')
const password = eid('password')

const potpis = eid('login-box')

const rezultatDiv = eid("prikaz")
const naziv = eid('kriterijum')

const godinaUp = eid('godina-gore')
const godinaDown = eid('godina-dole')
const naslovUp = eid('naslov-gore')
const naslovDown = eid('naslov-dole')

let filmovi = []

let rezultati = []
let rezultatiTemp = []
let rezultatiZaPrikaz = []

let sablon = ''


// IZBOR TEME ---------------------------------------------------------------

function izborTeme(tema) {
  document.getElementById('osnovna-tema').setAttribute('href', tema);
}

/* PRIJAVI SE --------------------------------------------------------------- */

function loginBox() {
  const lgn = eid("login-box");
  if (lgn.style.display === "block") {
    lgn.style.display = "none";

  } else {
    lgn.style.display = "block";
  }
}

potpis.addEventListener('click', function () {
  if (username.value == "admin" && password.value == "admin") {
    console.log("Podaci su ispravni");
  }
})

// /* NAVIGACIJA --------------------------------------------------------------- */

function hamburger() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// FILTERI ---------------------------------------------------------------

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    filmovi = rezultati = data
    render(rezultati)
  })

// ---------------------------------------------------------------

function render(rezultati) {
  sablon = ""
  const limit = rezultati.length >= 8 ? 8 : rezultati.length
  for (let i = 0; i < limit; i++) {
    sablon += ` <div class="film">
            <h3 class= "naslov">${rezultati[i].naziv} </h3> 
            <p>• Godina : ${rezultati[i].godina}</p><hr>
             <img src=${rezultati[i].slika} alt="" class="slike">
                </div> `
  }

  rezultatDiv.innerHTML = sablon
}

naziv.addEventListener("input", function () {
  const prikazNaziv = rezultati.filter(film =>
    film.naziv.toLowerCase().includes(naziv.value.toLowerCase())
  )

  render(rezultati)
})

// ---------------------------------------------------------------

function prikazi(rezultati) {
  sablon = ""
  const limit = rezultati.length >= 12 ? 12 : rezultati.length
  for (let i = 0; i < limit; i++) {
    sablon += ` <div class= "film">
  <h3 class= "naslov">${rezultati[i].naziv} </h3> 
  <p>• Godina : ${rezultati[i].godina}</p><hr>
   <img src=${rezultati[i].slika} alt="" class="slike">
      </div> `
  }

  rezultatDiv.innerHTML = sablon

}

naziv.addEventListener("input", function () {
  const prikazNaziv = rezultati.filter(film =>
    film.naziv.toLowerCase().includes(naziv.value.toLowerCase())
  )

  prikazi(prikazNaziv)
})

//  ---------------------------------------------------------------

function uporediGG(a, b) {
  if (a.godina < b.godina)
    return -1;
  if (a.godina > b.godina)
    return 1;
  return 0;
}

function uporediGD(b, a) {
  if (a.godina < b.godina)
    return -1;
  if (a.godina > b.godina)
    return 1;
  return 0;
}

function uporediNG(a, b) {
  if (a.naziv.toLowerCase().trim() < b.naziv.toLowerCase().trim())
    return -1;
  if (a.naziv.toLowerCase().trim() > b.naziv.toLowerCase().trim())
    return 1;
  return 0;
}

function uporediND(b, a) {
  if (a.naziv.toLowerCase().trim() < b.naziv.toLowerCase().trim())
    return -1;
  if (a.naziv.toLowerCase().trim() > b.naziv.toLowerCase().trim())
    return 1;
  return 0;
}

//  ---------------------------------------------------------------

godinaUp.addEventListener("click", function () {
  rezultati.sort(uporediGG)
  prikazi(rezultati)
})

godinaDown.addEventListener("click", function () {
  rezultati.sort(uporediGD)
  prikazi(rezultati)
})

naslovUp.addEventListener("click", function () {
  rezultati.sort(uporediNG)
  prikazi(rezultati)
})

naslovDown.addEventListener("click", function () {
  rezultati.sort(uporediND)
  prikazi(rezultati)
})








