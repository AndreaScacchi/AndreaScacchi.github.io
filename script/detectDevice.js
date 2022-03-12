const section1 = document.getElementById("section_1");
const section4 = document.getElementById("section_4");

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
