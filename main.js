/* LOGIN */

function loginBox() {
  const lgn = document.getElementById("login-box");
  if (lgn.style.display === "block") {
    lgn.style.display = "none";
  } else {
    lgn.style.display = "block";
  }
}



// IZBOR TEME

function izborTeme(tema) {
   document.getElementById('osnovna-tema').setAttribute('href', tema);
}



/* BURGER MENI */

function hamburger() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const p = window.matchMedia("(max-width: 1279px)")

// function maliEkran(p) {
//   if (p.matches) { 
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// maliEkran(p)
// p.addListener(maliEkran)

// kraj navigacije 

// PRIKAZ

const prikaz = document.getElementById('prikaz')
const kriterijum = document.getElementById('kriterijum')

let filmovi = []
let rezultati = []

function render(niz) {
  let sablon = ''
  const limit = niz.length >= 8 ? 8 : niz.length
  for (var i = 0; i < limit; i++) {
    sablon += ` <div class="film">
            <h3 class= "naslov">${niz[i].naziv} </h3> 
            <p>• Godina : ${niz[i].godina}</p><hr>
             <img src=${niz[i].slika} alt="" class="slike">
                </div> `
  }

  prikaz.innerHTML = sablon
}

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    filmovi = rezultati = data
    render(rezultati)
  })

kriterijum.addEventListener('input', function () {
  rezultati = filmovi.filter(film => film.naziv.includes(kriterijum.value))

  render(rezultati)
})



/* DODAJ FILM */

const slika = document.getElementById ('url-slike')
const plhdr = document.getElementById ('plchdr')

slika.addEventListener('input', function() {
    plhdr.src = slika.value
    
  })