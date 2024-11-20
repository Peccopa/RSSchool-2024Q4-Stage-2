export const loader = {
  removeLoader() {
    setTimeout(() => {
      document.querySelector('.page').classList.add('opacity-1');
      document.querySelector('.loading').classList.add('opacity-0');
    }, 150);
    setTimeout(() => {
      document.querySelector('.loading').style.display = 'none';
    }, 300);
  },
};
