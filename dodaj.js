const eid = selektor => document.getElementById(selektor)

const username = eid('username')
const password = eid('password')

const potpis = eid('login-box')

// IZBOR TEME

function izborTeme(tema) {
  document.getElementById('osnovna-tema').setAttribute('href', tema);
}

/* PRIJAVI SE */

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

// /* NAVIGACIJA */

function hamburger() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* DODAJ FILM */

const adresaSlike = document.getElementById('slika')
const ram = document.getElementById('ram-slike')

adresaSlike.addEventListener('input', function () {
  ram.src = adresaSlike.value

})

