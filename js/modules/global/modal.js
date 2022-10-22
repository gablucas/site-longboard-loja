import { ElementHandler } from "./elementHandler.js";
import outsideClick from "./outsideClick.js";

const elementHandler = new ElementHandler();

export function modal(container) {
  elementHandler.show(container);

  const modal = document.querySelector(container).firstElementChild;
  
  outsideClick(modal, () => {
    elementHandler.hide(container);
  })
}

export function callbackModal(button, container) {
  const btn = document.querySelector(button);
  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    modal(container);
  })
}