////////////////////////////////
/* Loading spinner using jQuery */
///////////////////////////////
/*$(window).on("load", function () {
    setTimeout(function() {
        $("#loading").hide();
    }, 1000);
});*/

/* Second method to implemented the spinner before the page is loaded */
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
    }, 2000);
  }
};

////////////////////////////////
/* Set date for copyright */
///////////////////////////////
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

////////////////////////////////
/* HEADER */
///////////////////////////////

/* Fixed Navbar */
const navbar = document.getElementById("navbar_id");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("navbar_fixed");
  } else {
    navbar.classList.remove("navbar_fixed");
  }
});

/* Scroll into contact section */
document.querySelector(".contact_link").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("contact_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/* Scroll indicator */
window.onscroll = function () {
  scrollIndicator();
};
function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress_bar").style.width = scrolled + "%";
}

// Input hamburger menu
const input = document.getElementById("checkbox_toggle");
const progress_bar = document.querySelector(".progress_container");

input.addEventListener("change", () => {
  if (input.checked) {
    progress_bar.style.display = "none";
  } else {
    progress_bar.style.display = "block";
  }
});

/* Scroll down button into header using jQuery*/
const scrollDown = document.querySelector(".scroll_down");
const section1 = document.getElementById("section_1");
const section4 = document.getElementById("section_4");

$(function () {
  $(".scroll_down").click(function () {
    $("html, body").animate(
      { scrollTop: $("#section_1").offset().top },
      "slow"
    );
    return false;
  });
});

function loadDeviceSpecificBackground() {
  if (navigator.userAgent.toLowerCase().match(/android/)) {
    section1.style.backgroundAttachment = "fixed";
    section4.style.backgroundAttachment = "fixed";
  } else if (
    navigator.userAgent.toLowerCase().match(/iphone/) ||
    navigator.userAgent.toLowerCase().match(/ipad/)
  ) {
    progress_bar.style.display = "none";
    section1.style.backgroundAttachment = "scroll";
    section4.style.backgroundAttachment = "scroll";
  }
}
loadDeviceSpecificBackground();

////////////////////////////////
/* ANIMATIONS */
///////////////////////////////

/* animate the title */
// Wrapp every letter in a span
var textWrapper = document.querySelector(".anime");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

// Set Anime library to perform the animation on title
anime
  .timeline({ loop: true })
  .add({
    targets: ".anime .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".anime",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000,
  });

// Initialize AOS library to create dynamic sections
AOS.init({
  startEvent: "DOMContentLoaded",
  duration: 2000,
  delay: 0,
  easing: "ease",
  once: false,
  mirror: false,
});