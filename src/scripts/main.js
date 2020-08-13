import { SliderModule } from './slider';

document.addEventListener('DOMContentLoaded', () => {
  const documentWidth = document.querySelectorAll('body')[0];

  if (documentWidth.clientWidth <= 950) {
    SliderModule.initSlider('#slider', 1, 1);
  }
});
