export function scroll() {
  document.addEventListener('scroll', onScroll);

  function onScroll() {
    const navigationElements = document.querySelectorAll('.navigation-list-item-link');
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach((element) => {
      if (element.offsetTop <= currentPosition
        && (element.offsetTop + element.offsetHeight) > currentPosition) {
        navigationElements.forEach((elem) => {
          elem.classList.remove('active');
          if (element.getAttribute('id') === elem.getAttribute('href').substring(1)) {
            elem.classList.add('active');
          }
        });
      }
    });
  }
}
