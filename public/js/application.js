/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
let number = 0;

function getNextItem(number, maxSlide) {
  if (number === maxSlide) {
    return 0;
  } if (number === -1) {
    return maxSlide - 1;
  }
  return number;
}

function removeActiveClass(items, dots, number) {
  items.item(number).classList.remove('slider-item-active');
  dots.item(number).classList.remove('slider-dot-active');
}

function addActiveClass(items, dots, number) {
  items.item(number).classList.add('slider-item-active');
  dots.item(number).classList.add('slider-dot-active');
}

main.addEventListener('click', (e) => {
  const watchCard = e.target.closest('article');

  if (watchCard) {
    const sliderItems = watchCard.querySelectorAll('.slider-item');
    const sliderDots = watchCard.querySelectorAll('.slider-dot');

    if (e.target.classList.contains('slider-arrow-prev')) {
      removeActiveClass(sliderItems, sliderDots, number);
      number = getNextItem(--number, sliderItems.length);
      addActiveClass(sliderItems, sliderDots, number);
    }

    if (e.target.classList.contains('slider-arrow-next')) {
      removeActiveClass(sliderItems, sliderDots, number);
      number = getNextItem(++number, sliderItems.length);
      addActiveClass(sliderItems, sliderDots, number);
    }
    //
    if (e.target.classList.contains('slider-item')) {
      console.log(e.target);
    }
    //
    if (e.target.classList.contains('slider-dot')) {
      sliderDots.forEach((dot) => dot.onclick = function () {
        removeActiveClass(sliderItems, sliderDots, number);
        number = Array.from(sliderDots).indexOf(this);
        addActiveClass(sliderItems, sliderDots, number);
      });
    }
  }
});
