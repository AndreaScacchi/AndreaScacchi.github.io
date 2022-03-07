///////////////////////////////
/* GALLERY API */
///////////////////////////////

/* Get Rome photos */
let count = 5;
const apiKey = "ZK6O_Hy2nnJUGWGuQ7oEpKcvWi51Q1RNPbBm5VMp4k0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=rome`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
getPhotos();
