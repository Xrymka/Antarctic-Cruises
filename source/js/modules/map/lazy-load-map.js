import {initMap} from './map';

const options = {
  rootMargin: '0px 0px 600px 0px',
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    const {target, isIntersecting} = entry;

    if (isIntersecting) {
      target.classList.add('is-load');
    }

    if (!target.classList.contains('is-load')) {
      initMap();
    }
  });
};

const observer = new IntersectionObserver(callback, options);
const target = document.querySelector('#map');

export {observer, target};
