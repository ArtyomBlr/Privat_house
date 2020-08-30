import { SliderModule } from './slider';
import { scroll } from './scroll';
import { openModalWindow } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  const documentWidth = document.querySelectorAll('body')[0];

  if (documentWidth.clientWidth <= 950) {
    SliderModule.initSlider('#slider', 1, 1);
  }
});

scroll();
openModalWindow();
