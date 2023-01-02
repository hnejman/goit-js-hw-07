import { galleryItems } from './gallery-items.js';
// Change code below this line

const output = document.querySelector(".gallery");

for(let i = 0; i < 9; i++){
    const item = document.createElement("div");
    item.classList.add("gallery__item");
    output.insertAdjacentElement("beforeend", item);

    const a = document.createElement("a");
    a.classList.add("gallery__image");
    a.href = galleryItems[i].original;
    a.classList.add("min");
    output.lastChild.insertAdjacentElement("afterbegin", a);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.alt=galleryItems[i].description;
    image.src=galleryItems[i].preview;
    image.dataset.source = galleryItems[i].original;
    output.lastChild.firstChild.insertAdjacentElement("afterbegin", image);
};

output.addEventListener("click", e =>{
    const instance = basicLightbox.create(`
    <img src="" alt="" loading="lazy" width="800" height="600">
`)
instance.show()

    const selector = document.querySelector(".basicLightbox__placeholder");
    console.log(selector);
    selector.lastChild.src = e.target.dataset.source;
    selector.lastChild.alt = e.target.alt

    selector.addEventListener("keydown", (event) => {
        if (event.isComposing || event.keyCode === 27) {
            instance.close();
            console.log("closing");
        }
        
      });
}, false);



console.log(galleryItems);
