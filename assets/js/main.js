// BUTTON TO TOP
// Get the button:
mybutton = document.getElementById("myBtnToTop");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// MENUTOGGLE
const menuToggle = document.querySelector(".menuToggle");
const menuToggleLine1 = document.querySelector(".menuToggle__line--1");
const menuToggleLine2 = document.querySelector(".menuToggle__line--2");
const menuToggleLine3 = document.querySelector(".menuToggle__line--3");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
  menuToggleLine1.classList.toggle("no-animation");
  menuToggleLine2.classList.toggle("no-animation");
  menuToggleLine3.classList.toggle("no-animation");
});

// FOOTER COPYRIGHT
const footerCopy = document.querySelector(".footer__copy");
const actualYear = new Date().getFullYear();
const copyYear = `&copy; ${actualYear} `;
footerCopy.insertAdjacentHTML("afterbegin", copyYear);
