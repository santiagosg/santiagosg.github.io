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

// MenuToggle

contenedor = document.querySelector(".container");
header__logo = document.querySelector(".header__logo");

$(document).ready(function () {
  // menu click event
  $(".menuToggle").click(function () {
    $(this).toggleClass("active");
    $(".menuToggle__line").removeClass("no-animation");
    if ($(this).hasClass("active")) {
      $(".nav").addClass("active");
      header__logo.style.position = " fixed";

      if (window.matchMedia("(pointer: coarse)").matches) {
      } else {
        $("body").css({ overflow: "hidden" });
        contenedor.style.marginRight = " 0.6rem";
      }
    } else {
      $(".nav").removeClass("active");
      header__logo.style.position = " relative";
      if (window.matchMedia("(pointer: coarse)").matches) {
      } else {
        $("body").css({ overflow: "visible" });
        contenedor.style.marginRight = " 0";
      }
    }
  });
});
