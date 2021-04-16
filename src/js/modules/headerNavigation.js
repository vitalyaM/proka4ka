export default function headerNavigation() {
  const navigationContainer = document.querySelector('.header-main .container');
  const headerNavList = document.querySelector('#main-nav ul');
  const navListYet = document.querySelector('.main-nav_yet');
  const navSublistYet = document.querySelector('.main-nav_yet-sublist');
  const logo = document.querySelector('.header-main__logo');
  const actions = document.querySelector('.header-main__actions');

  function hideNavigationElements() {
    const nav = document.querySelector('#main-nav');
    const navList = nav.querySelector('ul');

    if (nav) {
      if ((headerNavList.offsetWidth +
        navListYet.offsetWidth +
        logo.offsetWidth +
        actions.offsetWidth + 75) > navigationContainer.offsetWidth && navList.querySelector('li')) {
        navListYet.classList.remove('hide');
        navListYet.classList.add('show');

        while (((headerNavList.offsetWidth +
          navListYet.offsetWidth +
          logo.offsetWidth +
          actions.offsetWidth + 75) > navigationContainer.offsetWidth && navList.querySelector('li'))) {
          navSublistYet.prepend(headerNavList.lastElementChild);
        }
      }
    }
  }

  if (window.innerWidth > 1024) {
    hideNavigationElements();
  }

  (() => {
    const throttle = (type, name, obj) => {
      obj = obj || window;
      let running = false;
      const func = () => {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(() => {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle('resize', 'optimizedResize');
  })();

  window.addEventListener('optimizedResize', () => {
    if (window.innerWidth > 1024) {
      hideNavigationElements();
    }
  });
}
