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

// Helper functio to quickly assign elements with IDs to constants
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements for links & photos, add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });
        // Create <img> for photo
        const img = document.createElement("img");
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Event listener, check when each is finished loading
        //img.addEventListener("load", imageLoaded);

        // Put <img> inside <a>, then puth both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error.message);
    }
}
getPhotos();
