import { galleryItems } from './gallery-items.js';
// Change code below this line

const output = document.querySelector(".gallery");

for(let i = 0; i < 9; i++){
    const item = document.createElement("div");
    item.classList.add("gallery__item");
    output.insertAdjacentElement("beforeend", item);

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = galleryItems[i].original;
    a.dispatchEvent;
    a.classList.add("min");
    output.lastChild.insertAdjacentElement("afterbegin", a);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.alt=galleryItems[i].description;
    image.src=galleryItems[i].preview;
    image.dataset.source = galleryItems[i].original;
    output.lastChild.firstChild.insertAdjacentElement("afterbegin", image);
};

output.addEventListener("click", e=>{
    e.stopPropagation;
    if(e.target.classList.contains("gallery__image")||e.target.classList.contains("gallery__link")){
    const instance = basicLightbox.create(`
    <img src="" alt="" width="800" height="600">
    `)
    instance.show()
    console.log("reading");
    const selector = document.querySelector(".basicLightbox__placeholder");
    console.log(selector);
    selector.lastChild.src = e.target.dataset.source;
    selector.lastChild.alt = e.target.alt
    }
});

console.log(galleryItems);