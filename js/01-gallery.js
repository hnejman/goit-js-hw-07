import { galleryItems } from './gallery-items.js';
// Change code below this line

const output = document.querySelector(".gallery");

output.addEventListener("click", e =>{
    console.log(galleryItems[e.target.dataset.number].original);
    basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()
})

for(let i = 0; i < 9; i++){
    const wrapper = document.createElement("div");
    wrapper.classList.add("gallery__wrapper");
    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src=galleryItems[i].preview;
    image.dataset.number = i;
    output.insertAdjacentElement("beforeend", wrapper);
    output.lastChild.insertAdjacentElement("afterbegin", image);
}

console.log(galleryItems);
