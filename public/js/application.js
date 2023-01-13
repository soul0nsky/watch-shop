/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
const sliderPrev = document.querySelector('.slider-arrow-prev');
const sliderNext = document.querySelector('.slider-arrow-next');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderDots = document.querySelectorAll('.slider-dot');

let number = 0;

function getNextItem(number, maxSlide) {
  if (number === maxSlide) {
    return 0;
  } if (number === -1) {
    return maxSlide - 1;
  }
  return number;
}

function removeActiveClass(number) {
  sliderItems.item(number).classList.remove('slider-item-active');
  sliderDots.item(number).classList.remove('slider-dot-active');
}

function addActiveClass(number) {
  sliderItems.item(number).classList.add('slider-item-active');
  sliderDots.item(number).classList.add('slider-dot-active');
}

sliderPrev.addEventListener('click', () => {
  removeActiveClass(number);
  number = getNextItem(--number, sliderItems.length);
  addActiveClass(number);
});

sliderNext.addEventListener('click', () => {
  removeActiveClass(number);
  number = getNextItem(++number, sliderItems.length);
  addActiveClass(number);
});

sliderDots.forEach((sliderDot) => sliderDot.onclick = function () {
  removeActiveClass(number);
  number = Array.from(sliderDots).indexOf(this);
  addActiveClass(number);
});
