import { ElementHandler } from "./elementHandler.js";
import outsideClick from "./outsideClick.js";

const elementHandler = new ElementHandler();

export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const listMobile = document.querySelector('[data-menu="list"]');

  menuMobile.addEventListener('touchstart', openMenuMobile);
  
  function openMenuMobile(e) {
    e.stopPropagation();
    e.preventDefault();
    elementHandler.show('[data-menu="button"]');
    elementHandler.show('[data-menu="list"]');

    outsideClick(listMobile, () => {
      elementHandler.hide('[data-menu="list"]');
    })
  }
}
