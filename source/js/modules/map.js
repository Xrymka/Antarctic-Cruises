const initMap = () => {
  let container = document.querySelector('#map');
  ymaps.ready(init);
  function init() {
    if (!container) {
      return;
    }

    let myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 15.5,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
      suppressMapOpenBlock: true,
    });

    let placemark = new ymaps.Placemark([59.9375603740233, 30.32302094047468], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-18, -12],
    });

    myMap.geoObjects.add(placemark);
  }
};

export {initMap};
