import {ScrollLock} from '../utils/scroll-lock';

const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('[data-header="header"]');
const burgerBtn = header.querySelector('[data-header="burger-button"]');
const logo = header.querySelector('[data-header="logo"]');
const burgerNav = header.querySelector('[data-header="nav"]');
const burgerLink = header.querySelectorAll('[data-header="nav-link"]');

function handleBurger() {
  if (body.clientWidth >= 768) {
    return;
  }

  html.scrollLock = new ScrollLock();
  if (burgerBtn.classList.contains('is-open')) {
    html.scrollLock.enableScrolling();
  } else {
    html.scrollLock.disableScrolling();
  }

  burgerBtn.classList.toggle('is-open');
  logo.classList.toggle('is-open');
  burgerNav.classList.toggle('is-open');
}

const initBurger = () => {
  if (!burgerBtn) {
    return;
  }

  burgerBtn.addEventListener('click', handleBurger);
  burgerLink.forEach((element) => {
    element.addEventListener('click', handleBurger);
  });

  html.addEventListener('click', (e) => {
    if (e.target === burgerNav && burgerNav.classList.contains('is-open')) {
      handleBurger();
    }
  });
};

export {initBurger};
