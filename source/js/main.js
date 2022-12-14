import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {resetDefaultClass} from './utils/remove-nojs';
import {initBurger} from './modules/burger';
import {initPhoneMask} from './modules/phone-mask';
import {initForm} from './modules/send-form';
import {createScript} from './modules/map/create-script';
import {initMap} from './modules/map/map';

window.addEventListener('DOMContentLoaded', () => {

  resetDefaultClass();

  iosVhFix();
  createScript();
  initBurger();

  window.addEventListener('load', () => {
    initModals();
    initPhoneMask();
    initForm();
    initMap();
  });
});

