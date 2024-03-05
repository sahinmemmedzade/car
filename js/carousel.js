
let currentIndex = 0;
let interval;

const showSlide = (index) => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    currentIndex = (index + slides.length) % slides.length;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
};

const autoplay = () => {
    interval = setInterval(() => showSlide(currentIndex + 1), 3500);
};

const stopAutoplay = () => clearInterval(interval);

const changeSlide = (direction) => {
    stopAutoplay();
    showSlide(currentIndex + direction);
};

autoplay();
