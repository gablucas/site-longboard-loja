import { ElementHandler } from "./elementHandler.js";
const elementHandler = new ElementHandler();

export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const listMobile = document.querySelector('[data-menu="list"]');
  
  menuMobile.addEventListener('touchstart', openMenuMobile);
  function openMenuMobile() {
    elementHandler.show('[data-menu="button"]')
    listMobile.classList.add('active');
    
  }
}
