export class ElementHandler {
  constructor() {

  }

  remove(element, attribute) {
    const getElement = document.querySelector(element);
    getElement.removeAttribute(attribute)
  }

  show(element) {
    const getElement = document.querySelector(element);
    getElement.removeAttribute('data-hide');
  }

  hide(element) {
    const getElement = document.querySelector(element);
    getElement.setAttribute('data-hide', "");
  }

  toogle(element) {
    const getElement = document.querySelector(element);
    getElement.toggleAttribute('data-show');
  }
}