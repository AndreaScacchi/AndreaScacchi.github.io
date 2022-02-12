/* animate the title */
// Wrapp every letter in a span
var textWrapper = document.querySelector('.anime');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Set Anime library to perform the animation on title
anime.timeline({loop: true})
    .add({
        targets: '.anime .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
        targets: '.anime',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000
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