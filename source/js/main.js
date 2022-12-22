import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {resetDefaultClass} from './utils/remove-nojs';
import {initBurger} from './modules/burger';
import {initPhoneMask} from './modules/phone-mask';
import {initForm} from './modules/send-form';
import {createScript} from './modules/map/create-script';
import {observer, target} from './modules/map/lazy-load-map';

window.addEventListener('DOMContentLoaded', () => {

  resetDefaultClass();

  iosVhFix();
  initBurger();
  createScript();

  window.addEventListener('load', () => {
    initModals();
    initPhoneMask();
    initForm();

    observer.observe(target);

  });
});

