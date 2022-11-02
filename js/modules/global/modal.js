import { ElementHandler } from "./elementHandler.js";
import { outsideClick } from "./outsideClick.js";

const elementHandler = new ElementHandler();

export function modal(container) {
  elementHandler.remove(container, 'data-hide');

  const modal = document.querySelector(container).firstElementChild;
  
  outsideClick(modal, () => {
    elementHandler.add(container, 'data-hide');
  })
}

export function callbackModal(button, container) {
  const btn = document.querySelector(button);
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    modal(container);
  })
}