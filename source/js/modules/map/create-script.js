const createScript = () => {
  let scriptMap = document.createElement('script');

  scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=c5acbb6a-8eeb-4b76-a1af-3e7f7d072ad8&lang=ru_RU';
  scriptMap.async = true;
  document.body.appendChild(scriptMap);
};

export {createScript};
