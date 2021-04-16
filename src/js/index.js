import deviceType from './modules/deviceType';
import dynamicAdapt from './modules/dynamic_adapt';
import headerModule from './modules/headerModule';
import scrollUp from './modules/scrollUp';

window.addEventListener('DOMContentLoaded', () => {
  deviceType();
  dynamicAdapt();
  headerModule();
  scrollUp();

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  if (document.querySelector('.promo__info-count')) {
    const animateNumberSelector = document.querySelector('.promo__info-count');
    let animateNumber = animateNumberSelector.getAttribute('data-count');

    if (!animateNumber) {
      animateNumber = 0;
    } else {
      animateNumber = animateNumberSelector.getAttribute('data-count');
    }

    animateValue(animateNumberSelector, 0, animateNumber, 3000);
  }
});
