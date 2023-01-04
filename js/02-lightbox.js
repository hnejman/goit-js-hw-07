import { galleryItems } from './gallery-items.js';
// Change code below this line

const output = document.querySelector(".gallery");

for(let i = 0; i < 9; i++){
    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = galleryItems[i].original;
    output.insertAdjacentElement("afterbegin", a);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.alt=galleryItems[i].description;
    image.src=galleryItems[i].preview;
    image.dataset.source = galleryItems[i].original;
    output.firstChild.insertAdjacentElement("afterbegin", image);
};

const lightbox = new SimpleLightbox(".gallery .gallery__link", {
    additionalHtml: "<p class = decription>...</p>"
});

lightbox.on('shown.simplelightbox', function () {
    let number = document.querySelector(".sl-current");
    let spot = document.querySelector(".decription");
    spot.textContent = galleryItems[number.textContent].description;
    spot.classList.add("visible");
});

lightbox.on('nextDone.simplelightbox', function () {
    let number = document.querySelector(".sl-current");
    let spot = document.querySelector(".decription");
    spot.textContent = galleryItems[number.textContent].description;
    spot.classList.add("visible");
});

console.log(galleryItems);
