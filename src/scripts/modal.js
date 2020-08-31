export function openModalWindow() {
  const modalWindowOne = document.getElementById('modal-window-one');
  const modalWindowTwo = document.getElementById('modal-window-two');
  const modalWindowThree = document.getElementById('modal-window-three');

  document.addEventListener('click', openWindow);

  function openWindow(event) {
    switch (event.target.id) {
      case 'button-one':
        modalWindowOne.style.display = 'block';
        break;
      case 'button-two':
        modalWindowTwo.style.display = 'block';
        break;
      case 'button-three':
        modalWindowThree.style.display = 'block';
        break;
      case 'button-close-one':
        modalWindowOne.style.display = 'none';
        break;
      case 'button-close-two':
        modalWindowTwo.style.display = 'none';
        break;
      case 'button-close-three':
        modalWindowThree.style.display = 'none';
        break;
      default:
        break;
    }
  }
}
