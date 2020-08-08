const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original= document.querySelector(".full-image");
const imgText = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic chnage  text and image
        const originalSrc = preview.getAttribute("data-original");
        console.log(originalSrc);
        original.src='./Full/${originalSrc}';
        const altText = preview.alt;
        caption.textContext = altText;
    })
})

modal.addEventListener('click', (event) => {
    console.log(event);
    if(event.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove("open");
    }
});