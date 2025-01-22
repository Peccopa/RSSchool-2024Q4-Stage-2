export const pageup = {
  showPageUpIco() {
    if (window.location.pathname.split('/').length > 4) {
      const pageUpIco = document.querySelector('.pageup');
      const scrollPosition = window.scrollY;
      scrollPosition >= 300 && !document.querySelector('.modal')
        ? pageUpIco.classList.remove('invisible')
        : pageUpIco.classList.add('invisible');
    }
  },
};
