let eid = id => document.getElementById(id)

// IZBOR TEME

function izborTeme(tema) {
  document.getElementById('osnovna-tema').setAttribute('href', tema);
}

/* PRIJAVI SE */

function loginBox() {
  const lgn = document.getElementById("login-box");
  if (lgn.style.display === "block") {
    lgn.style.display = "none";
  } else {
    lgn.style.display = "block";
  }
}

const logIn = eid('login-box')

logIn.addEventListener('click', function () {
  if (username.value == "admin" && password.value == "admin") {
    const iks = document.getElementsByClassName('iks')
    console.log(iks);
    for (let i = 0; i < iks.length; i++) {
      iks[i].style.display = "block"
    }
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
