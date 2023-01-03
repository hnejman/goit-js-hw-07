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

const lightbox = new SimpleLightbox(".gallery .gallery__link");

lightbox.on('shown.simplelightbox', function () {
	const p = document.createElement("p");
    let number = document.querySelector(".sl-current");
    p.textContent = galleryItems[number.textContent].description;
    const spot = document.querySelector(".sl-wrapper");
    spot.insertAdjacentElement("beforeend", p);
});

console.log(galleryItems);
