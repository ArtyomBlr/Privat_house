export const SliderModule = (function () {
  const defaultModuleOptions = {
    sliderTrackSelector: '.carousel',
    prevButtonSelector: '.carousel-swiper-buttons-prev',
    nextButtonSelector: '.carousel-swiper-buttons-next',
    sliderTrackItemSelector: '.carousel-slider',
    slidesToShow: 1,
    sliderToScroll: 1,
  };

  let moduleOptions;
  let position = 0;
  let sliderContainer;
  let sliderTrack;

  function initSlider(sliderId, options) {
    moduleOptions = {
      ...defaultModuleOptions,
      ...options,
    };

    sliderContainer = document.getElementById(`${sliderId}`);
    sliderTrack = sliderContainer.querySelector(
      moduleOptions.sliderTrackSelector,
    );

    const btnPrev = sliderContainer.querySelector(
      moduleOptions.prevButtonSelector,
    );
    const btnNext = sliderContainer.querySelector(
      moduleOptions.nextButtonSelector,
    );
    const items = sliderContainer.querySelectorAll(
      moduleOptions.sliderTrackItemSelector,
    );

    const itemsCount = items.length;
    const slidesToScroll = moduleOptions.slidesToScroll || moduleOptions.slidesToScroll;
    const slidesToShow = moduleOptions.slidesToShow || moduleOptions.slidesToShow;
    const itemWidth = sliderContainer.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

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
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
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
