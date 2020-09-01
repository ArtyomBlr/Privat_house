export const SliderModuleForModalWindowTwo = (function () {
  const defaultModuleOptions = {
    sliderTrackSelector: '.window-modal-slider',
    sliderTrackItemSelector: '.window-modal-slider-item',
    slidesToShow: 0,
    sliderToScroll: 0,
  };

  let moduleOptions;
  let position = 0;
  let sliderContainer;
  let sliderTrack;

  function initSlider(sliderId, bttnPrev, bttnNext, options) {
    moduleOptions = {
      ...defaultModuleOptions,
      ...options,
    };

    sliderContainer = document.getElementById(`${sliderId}`);
    sliderTrack = sliderContainer.querySelector(
      moduleOptions.sliderTrackSelector,
    );

    const btnPrev = document.getElementById(`${bttnPrev}`);
    const btnNext = document.getElementById(`${bttnNext}`);

    const items = sliderContainer.querySelectorAll(
      moduleOptions.sliderTrackItemSelector,
    );

    const itemsCount = items.length;
    const slidesToScroll = moduleOptions.slidesToScroll || moduleOptions.slidesToScroll;
    const slidesToShow = moduleOptions.slidesToShow || moduleOptions.slidesToShow;
    const itemWidth = sliderContainer.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth + 40;

    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });

    const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();

    btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth + 80;
      setPosition(position);
      checkBtns();
    });

    btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth;

      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      sliderTrack.style.transform = `translateX(${position}px)`;
    };
  }

  return {
    initSlider,
  };
})();
