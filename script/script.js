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

/* Currency converter */
const dropList = document.querySelectorAll('form select');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const getButton = document.querySelector('form button');

/* Select country from the drop list */
for(let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list) {
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "EUR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

/* Function to load the flag country */
function loadFlag(element) {
    for(let code in country_list) {
        if(code == element.value) {
            let imgTag = element.parentElement.querySelector('img');
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", () => {
    getExchangeRate();
});

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

/* Implemented the exchange icon */
const exchangeIcon = document.querySelector('form .icon');
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

/* Function to implement the exchange rate */
function getExchangeRate() {
    const amount = document.querySelector('form input');
    const exchangeRateTxt = document.querySelector('form .exchange-rate');
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/9777ffd1356b7342428d239a/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() => {
        exchangeRateTxt.innerText = "Something went wrong";
    });
}