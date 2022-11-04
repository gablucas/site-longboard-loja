import { ElementHandler } from "./elementHandler.js";

const elementHandler = new ElementHandler();

export function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');

  function openMenuMobile(e) {
    e.stopPropagation();
    e.preventDefault();
    document.body.classList.toggle('no-scroll');
    elementHandler.toggle('[data-menu="list"]', 'data-show');
    
    if (this.nextElementSibling.hasAttribute('data-show')) {
      menuMobile.firstChild.setAttribute('src', '/site-longboard-loja/img/icones/iconfecharmenumobile.svg')
    } else {
      menuMobile.firstChild.setAttribute('src', '/site-longboard-loja/img/icones/iconmenumobile.svg')
    }
  }

  menuMobile.addEventListener('touchstart', openMenuMobile);
}
