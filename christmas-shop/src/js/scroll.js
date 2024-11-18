export const scroll = {
  getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  },
  hideScroll() {
    if (!document.body.classList.contains('hide-scroll')) {
      document.body.classList.add('hide-scroll');
      document.body.style.marginRight = `${this.getScrollWidth()}px`;
    } else {
      document.body.classList.remove('hide-scroll');
      document.body.style.marginRight = `0px`;
    }
  },
};
