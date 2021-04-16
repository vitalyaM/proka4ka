export default function scrollUp() {
  if (document.querySelector('.scroll-up')) {
    const scrollUpButton = document.querySelector('.scroll-up');
    let windowScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      windowScrollY = window.scrollY;

      if (windowScrollY > 500) {
        scrollUpButton.classList.remove('is-hide');
        scrollUpButton.classList.add('is-active');
      } else {
        scrollUpButton.classList.remove('is-active');
        scrollUpButton.classList.add('is-hide');
      }
    });

    scrollUpButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
