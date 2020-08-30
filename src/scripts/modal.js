export function openModalWindow() {
  const modalWindowOne = document.getElementById('modal-window-one');
  const modalWindowTwo = document.getElementById('modal-window-two');
  const modalWindowThree = document.getElementById('modal-window-three');

  // const buttonClose = document.getElementsByClassName('button-close')[0];

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
      default:
        break;
    }

    if (event.target.className === 'button-close') {
      console.log(1);
    }
  }
}
