export const pageup = {
  showPageUpIco() {
    const pageUpIco = document.querySelector('.pageup');
    const scrollPosition = window.scrollY;
    scrollPosition >= 300 // 100
      ? pageUpIco.classList.remove('invisible')
      : pageUpIco.classList.add('invisible');
  },
};
