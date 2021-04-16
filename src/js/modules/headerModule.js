import headerMenu from './headerMenu';
import headerNavigation from './headerNavigation';

export default function headerModule() {
  const header = document.querySelector('#header');
  const headerHeight = header.offsetHeight;

  headerNavigation();
  headerMenu();

  function changeStyleAtScroll() {
    if (window.pageYOffset > headerHeight) {
      header.classList.add('js-scrolled');
    } else {
      header.classList.remove('js-scrolled');
    }
  }

  window.addEventListener(
    'scroll',
    () =>
      setTimeout(() => {
        changeStyleAtScroll();
      }, 1000)
  );

  if (document.querySelector('.header').classList.contains('hide-at-scroll')) {
    (() => {
      const doc = document.documentElement;
      const w = window;

      let prevScroll = w.scrollY || doc.scrollTop;
      let curScroll;
      let direction = 0;
      let prevDirection = 0;

      const headerAtScroll = document.querySelector('.hide-at-scroll');

      const checkScroll = () => {
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
          // scrolled up
          direction = 2;
        } else if (curScroll < prevScroll) {
          // scrolled down
          direction = 1;
        }

        if (direction !== prevDirection) {
          toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
      };

      const toggleHeader = () => {
        if (direction === 2 && curScroll > headerHeight) {
          headerAtScroll.classList.add('js-hide');
          prevDirection = direction;
        } else if (direction === 1) {
          headerAtScroll.classList.remove('js-hide');
          prevDirection = direction;
        }
      };

      window.addEventListener('scroll', checkScroll);
    })();
  }
}
