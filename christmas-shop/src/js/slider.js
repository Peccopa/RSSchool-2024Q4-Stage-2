export const slider = {
  sliderSec: document.querySelector('.slider'),
  sliderBtns: document.querySelector('.slider__btns'),
  sliderClip: document.querySelector('.slider__clip'),
  sliderBtnLeft: document.querySelector('.slider-button.left'),
  sliderBtnRght: document.querySelector('.slider-button.right'),
  sliderAnimationEnd() {
    slider.sliderBtns.addEventListener('click', slider.sliderClickTrash);
  },
  sliderResize() {
    slider.sliderClip.style.left = `0px`;
    slider.sliderBtnLeft.classList.add('slider-button_inactive');
    slider.sliderBtnRght.classList.remove('slider-button_inactive');
  },
  sliderClick(e) {
    if (!e.target.classList.contains('slider__btns')) {
      const secWidth = parseFloat(getComputedStyle(slider.sliderSec).width);
      const sliderClipStyles = getComputedStyle(slider.sliderClip);
      const sliderClipWidth =
        parseFloat(sliderClipStyles.marginLeft) * 2 +
        parseFloat(sliderClipStyles.width);
      const clickCount = Math.floor(sliderClipWidth / secWidth);
      const clipStep = Math.trunc((sliderClipWidth - secWidth) / clickCount);
      const clipPosition = parseFloat(getComputedStyle(slider.sliderClip).left);
      if (e.target.classList.contains('right')) {
        if (clipPosition !== -clipStep * clickCount) {
          slider.sliderClip.style.left = `${clipPosition - clipStep}px`;
          slider.sliderBtnLeft.classList.remove('slider-button_inactive');
          slider.sliderBtns.removeEventListener('click', slider.sliderClick);
          slider.sliderClip.addEventListener(
            'transitionend',
            slider.sliderAnimationEnd
          );
        }
        if (clipPosition - clipStep === -clipStep * clickCount) {
          slider.sliderBtnRght.classList.add('slider-button_inactive');
        }
      }
      if (e.target.classList.contains('left')) {
        if (clipPosition !== 0) {
          slider.sliderClip.style.left = `${clipPosition + clipStep}px`;
          slider.sliderBtnRght.classList.remove('slider-button_inactive');
          slider.sliderBtns.removeEventListener('click', slider.sliderClick);
          slider.sliderClip.addEventListener(
            'transitionend',
            slider.sliderAnimationEnd
          );
        }
        if (slider.sliderClip.style.left === '0px') {
          slider.sliderBtnLeft.classList.add('slider-button_inactive');
        }
      }
    }
  },
  sliderClickTrash(e) {
    if (!e.target.classList.contains('slider__btns')) {
      const clipPosition = parseFloat(getComputedStyle(slider.sliderClip).left);
      const secWidth = parseFloat(getComputedStyle(slider.sliderSec).width);
      const sliderClipStyles = getComputedStyle(slider.sliderClip);
      const sliderClipWidth =
        parseFloat(sliderClipStyles.marginLeft) * 2 +
        parseFloat(sliderClipStyles.width);
      const clickCount = secWidth > 768 ? 3 : 6;
      const clipStep = Math.trunc((sliderClipWidth - secWidth) / clickCount);

      if (e.target.classList.contains('right')) {
        if (clipPosition - clipStep === -clipStep * clickCount) {
          slider.sliderBtnRght.classList.add('slider-button_inactive');
        }

        if (clipPosition !== -clipStep * clickCount) {
          slider.sliderClip.style.left = `${clipPosition - clipStep}px`;
          slider.sliderBtnLeft.classList.remove('slider-button_inactive');
          slider.sliderBtns.removeEventListener(
            'click',
            slider.sliderClickTrash
          );
          slider.sliderClip.addEventListener(
            'transitionend',
            slider.sliderAnimationEnd
          );
        }
      }
      if (e.target.classList.contains('left')) {
        if (-parseFloat(slider.sliderClip.style.left) === clipStep) {
          slider.sliderBtnLeft.classList.add('slider-button_inactive');
        }
        if (clipPosition !== 0) {
          slider.sliderClip.style.left = `${clipPosition + clipStep}px`;
          slider.sliderBtnRght.classList.remove('slider-button_inactive');
          slider.sliderBtns.removeEventListener(
            'click',
            slider.sliderClickTrash
          );
          slider.sliderClip.addEventListener(
            'transitionend',
            slider.sliderAnimationEnd
          );
        }
      }
    }
  },
};
