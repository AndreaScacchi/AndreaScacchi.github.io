/* animate the title */
// Wrapp every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\s/g, "<span class='letter'>$&</span>");