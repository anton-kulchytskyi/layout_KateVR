'use strict';

// dropdown for select language
const lang = document.querySelector('.dropbtn');
const options = document.querySelectorAll('.dropdown-content a');

options.forEach(el => {
  el.addEventListener('click', () => {
    const temp = el.innerText.trim();

    el.innerText = lang.innerText.trim();
    lang.innerText = temp;
  });
});

// show fixed buttom on scroll
const buttonContainer = document.querySelector('.button-container');
const contacts = document.querySelector('.contacts');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  if (y >= 100 && !(checkVisible(contacts))) {
    buttonContainer.classList.remove('button-container--hide');
  } else {
    buttonContainer.classList.add('button-container--hide');
  }
});

// check footer visability for hide the button container if it`s true
function checkVisible(elm) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math
    .max(document.documentElement.clientHeight, window.innerHeight);

  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// prevent reload page on click on submit button
const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

// carousel - about section
const prev = document.querySelector('.slider__controls--prev');
const next = document.querySelector('.slider__controls--next');
const slider = document.querySelector('.slider__container');
const dotsContainer = document.querySelector('.slider__dots');
const arrSlider = [...slider.children];

for (let i = 0; i < arrSlider.length; i += 1) {
  const dot = document.createElement('span');

  dot.className = 'slider__dot';
  dotsContainer.append(dot);
}

let sliderInd = 0;

setInterval(() => {
  sliderInd = sliderInd === arrSlider.length - 1
    ? 0
    : sliderInd += 1;

  carouselTranslateStyle(sliderInd);
}, 3000);

prev.disabled = sliderInd === 0;

function carouselTranslateStyle(k) {
  prev.disabled = k === 0;
  next.disabled = k === arrSlider.length - 1;

  [...dotsContainer.children].forEach((dot, ind) => {
    if (k === ind) {
      dot.classList.add('slider__dot--active');
    } else {
      dot.classList.remove('slider__dot--active');
    }
  });

  slider.style.transform = `translateX(-${k * slider.clientWidth}px)`;
}

next.addEventListener('click', () => {
  sliderInd++;

  carouselTranslateStyle(sliderInd);
});

prev.addEventListener('click', () => {
  sliderInd--;

  carouselTranslateStyle(sliderInd);
});
