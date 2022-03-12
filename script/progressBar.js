const progress_container = document.querySelector(".progress_container");

function progressBarSpecifDevice() {
    if (
        navigator.userAgent.toLowerCase().match(/iphone/) ||
        navigator.userAgent.toLowerCase().match(/ipad/)
    ) {
        progress_container.style.display = "none";
    } else {
        progress_container.style.display = "block";
    }
}
progressBarSpecifDevice();