///////////////////////////////
/* GALLERY API */
///////////////////////////////

/* Global Variables */
const imageContainer = document.getElementById('images_container');
const loader = document.getElementById('loader_img');
let photosArray = [];


/* Get Rome photos from Unsplash API */
let count = 5;
const apiKey = "ZK6O_Hy2nnJUGWGuQ7oEpKcvWi51Q1RNPbBm5VMp4k0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=rome`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displyPhotos();
    } catch (error) {
        console.log(error.message);
    }
}
getPhotos();
