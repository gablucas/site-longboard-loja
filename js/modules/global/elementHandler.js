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
    getElement.setAttribute('data-show', "");
  }

  hide(element) {
    const getElement = document.querySelector(element);
    getElement.removeAttribute('data-show');
    getElement.setAttribute('data-hide', "");
  }
}