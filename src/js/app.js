//cards 
const cards = document.querySelectorAll('.servises__tab__item'),
        text = document.querySelectorAll('.servises__tab__item__text'),
        link = document.querySelectorAll('.servises__link-more'), 
        title = document.querySelectorAll('.servises__tab__item__title'),
        cardsParent = document.querySelector('.servises__tab');

    function hideContent () {
        text.forEach (item => {
            item.style.display = 'none';

        });
        link.forEach (item => {
            item.style.display = 'none';
            
        });
        cards.forEach (item => {
            item.classList.remove('active');
            
        });
        title.forEach(item => {
            item.classList.remove('active_title');
        });
    }
    function showContent (i) {
        text[i].style.display = 'block';
        link[i].style.display = 'block';
        cards[i].classList.add('active');
        title[i].classList.add('active_title');

    }
    hideContent ();
    showContent (0);
    cardsParent.addEventListener('click', () => {
    const target = event.target;
    if (target && target.classList.contains('servises__tab__item')) {
        cards.forEach ( (item, i) => {
            if (target === item) {
                hideContent ();
                showContent (i); 
            }
        });
    }
});
//slider
const sliders = document.querySelectorAll('.testimonials__slider-items__item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideIndex = 1;

showSlide(slideIndex);

        function showSlide (n) {
            if (n > sliders.length) {
                slideIndex = 1;
            }
            if (n<1) {
                slideIndex = sliders.length;
            }
            sliders.forEach (item => item.style.display = 'none' );

            sliders[slideIndex-1].style.display = '';
        }

        function plusSlides(n) {
            showSlide(slideIndex +=n);
        }
        prev.addEventListener ('click', () => {
            plusSlides(-1);
        });
        next.addEventListener ('click', () => {
            plusSlides(1);
        });
        // end slider
