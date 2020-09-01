export function openModalWindow() {
  const modalWindowOne = document.getElementById('modal-window-one');
  const modalWindowTwo = document.getElementById('modal-window-two');
  const modalWindowThree = document.getElementById('modal-window-three');

  document.addEventListener('click', openWindow);

  function openWindow(event) {
    switch (event.target.id) {
      case 'button-one':
        modalWindowOne.style.height = '100vh';
        break;
      case 'button-two':
        modalWindowTwo.style.height = '100vh';
        break;
      case 'button-three':
        modalWindowThree.style.height = '100vh';
        break;
      case 'button-close-one':
        modalWindowOne.style.height = '0';
        break;
      case 'button-close-two':
        modalWindowTwo.style.height = '0';
        break;
      case 'button-close-three':
        modalWindowThree.style.height = '0';
        break;
      default:
        break;
    }
  }
}
