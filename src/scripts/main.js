import { SliderModule } from './slider';
import { SliderModuleForModalWindow } from './moduleOne';
import { SliderModuleForModalWindowTwo } from './moduleTwo';
import { SliderModuleForModalWindowThree } from './moduleThree';
import { scroll } from './scroll';
import { openModalWindow } from './modal';

window.onload = function () {
  const documentWidth = document.querySelectorAll('body')[0];
  const windowModalWidth = document.querySelectorAll('.window-modal')[0];

  if (documentWidth.clientWidth <= 950) {
    SliderModule.initSlider('slider', {
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  if (windowModalWidth.clientWidth <= 768) {
    SliderModuleForModalWindow.initSlider('modal', 'button-one-prev', 'button-one-next', {
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    SliderModuleForModalWindowTwo.initSlider('modal-two', 'button-two-prev', 'button-two-next', {
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    SliderModuleForModalWindowThree.initSlider('modal-three', 'button-three-prev', 'button-three-next', {
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
};

scroll();
openModalWindow();
