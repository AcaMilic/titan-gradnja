window.addEventListener('load', function(){
    galleryInit('.gallery-1');
 });

const tagBody = document.querySelector('body');

function galleryInit(id) {
    let galleryImg = document.querySelectorAll(`${id} img`);

    galleryImg.forEach((items, i, array) => {
        items.addEventListener('click', (e) => {

            insertNewGallerySlider(e);
            gallaryClose(e);

            let gallerySliderImg = document.querySelectorAll('.gallery-slider img');
            let gallerySlider = document.querySelector('.gallery-slider');

            gallerySliderImg[i].classList.add('gallery-active'); // making the first image active

            gallerySlider.insertAdjacentHTML('afterBegin', `<div class="gallery-alt">${items.alt}</div>`); //default Alt Slider
            gallerySlider.insertAdjacentHTML('afterBegin', `<div class="gallery-counter">${i + 1} / ${array.length}</div>`); // default Counter Slider

            // Slider Click
            document.querySelector('.next').addEventListener('click', () => {
                gallerySliderImg[i].classList.remove('gallery-active');
                i++;
                if(i == gallerySliderImg.length) i = 0;
                gallerySliderImg[i].classList.add('gallery-active');
                sliderDinamicElements();
            });

            document.querySelector('.prev').addEventListener('click', () => {
                gallerySliderImg[i].classList.remove('gallery-active');
                i--;
                if(i < 0) i = gallerySliderImg.length -1;
                gallerySliderImg[i].classList.add('gallery-active');
                sliderDinamicElements();
            });

            gallerySliderImg.forEach((items) => {
                items.addEventListener('contextmenu', ePreventDefaultMouse); // Prohibiting the "Contextmenu" event on img
                items.addEventListener('mousedown', ePreventDefaultMouse); // Prohibiting the "Mousedown" event on img
            });
        });

        items.addEventListener('contextmenu', ePreventDefaultMouse); // Prohibiting the "Contextmenu" event on img
        items.addEventListener('mousedown', ePreventDefaultMouse); // Prohibiting the "Mousedown" event on img
    });

    function insertNewGallerySlider(e) {
        let sliderHtml = `<div class="gallery-bg"><div class="gallery-slider">
                                <button class="gallery-close">&#10006;</button><button class="next">></button><button class="prev"><</button>
                          </div></div>`;
        tagBody.insertAdjacentHTML('afterBegin', sliderHtml);
        if(!e.target.classList.contains('gallery-bg')) tagBody.style.overflowY = 'hidden'; // Optimizing the "Scroll" event
        galleryImg.forEach((items) => {
           document.querySelector('.gallery-slider').innerHTML += `<img src="${items.dataset.img}" alt="${items.alt}">`;
        });
    };

    function gallaryClose(e) {
        e.preventDefault();
        let galleryBg = document.querySelector('.gallery-bg');
        document.querySelector('.gallery-close').addEventListener('click', () => {
            galleryBg.remove();
            tagBody.style.overflowY = 'scroll'; // Optimizing the "Scroll" event
        });
        galleryBg.addEventListener('click', (e) => {
            if(e.target.classList.contains('gallery-bg')) {
                galleryBg.remove();
                tagBody.style.overflowY = 'scroll'; // Optimizing the "Scroll" event;
            };
        });
        document.onkeydown = (e) => {
            if(e.code == 'Escape') {
                galleryBg.remove(); // Closing when the key is pressed 'Escape'
                tagBody.style.overflowY = 'scroll'; // Optimizing the "Scroll" event
            };
        };
    };

    function sliderDinamicElements() {
        document.querySelectorAll('.gallery-slider img').forEach((items, i, array) => {
            let gallerySlider = document.querySelector('.gallery-slider');
            if (items.classList.contains('gallery-active')) {
                document.querySelector('.gallery-slider .gallery-alt').remove();
                gallerySlider.insertAdjacentHTML('afterBegin', `<div class="gallery-alt">${items.alt}</div>`);

                document.querySelector('.gallery-slider .gallery-counter').remove();
                gallerySlider.insertAdjacentHTML('afterBegin', `<div class="gallery-counter">${i + 1} / ${array.length}</div>`);
            };
        });
    };

};

function ePreventDefaultMouse(e) {
    e.preventDefault();
};