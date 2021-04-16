export default function headerMenu() {
  const iconMenu = document.querySelector('.icon-menu');
  const menu = document.querySelector('.menu');
  const links = menu.querySelectorAll('#main-nav a');
  let unlock = true;

  iconMenu.addEventListener('click', () => {
    if (unlock) {
      iconMenu.classList.toggle('js-active');
      menu.classList.toggle('js-active');
      document.body.classList.toggle('js-lock');
      unlock = false;
    } else {
      menuClose();
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (unlock) {
        iconMenu.classList.toggle('js-active');
        menu.classList.toggle('js-active');
        document.body.classList.toggle('js-lock');
        unlock = false;
      } else {
        menuClose();
      }
    });
  });

  function menuClose() {
    iconMenu.classList.remove('js-active');
    menu.classList.remove('js-active');
    document.body.classList.toggle('js-lock');
    unlock = true;
  }
}
