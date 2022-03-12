///////////////////////////////
/* GALLERY API */
///////////////////////////////

/* Global Variables */
const imageContainer = document.getElementById("images_container");
const loader = document.getElementById("loader_img");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
const sectionGallery = document.getElementById("section_loader");

function galleryLoading() {
  if (navigator.userAgent.toLowerCase().match(/android/)) {
    sectionGallery.style.backgroundAttachment = "fixed";
  } else if (
    navigator.userAgent.toLowerCase().match(/iphone/) ||
    navigator.userAgent.toLowerCase().match(/ipad/)
  ) {
    sectionGallery.style.backgroundImage = "none";
    sectionGallery.style.backgroundColor = "#e9ecef";
  }
}
galleryLoading();

/* Get Rome photos from Unsplash API */
let count = 10;
const apiKey = "ZK6O_Hy2nnJUGWGuQ7oEpKcvWi51Q1RNPbBm5VMp4k0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=portrait&query=rome`;

// Check if all iamges were loaded
function imageLoaded() {
  imagesLoaded++;
  console.log(imagesLoaded);
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
    console.log("ready = ", ready);
  }
}

// Helper functio to quickly assign elements with IDs to constants
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for links & photos, add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("Total Images", totalImages);
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
    img.addEventListener("load", imageLoaded);

    // Put <img> inside <a>, then puth both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error: ${err.message}`);
    }
  }
}

// Check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// Function call
getPhotos();
