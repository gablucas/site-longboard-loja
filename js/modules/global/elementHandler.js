export class ElementHandler {
  constructor() {

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

  showAndHide(element1, element2) {
    const getElement1 = document.querySelector(element1);
    const getElement2 = document.querySelector(element2);

    getElement1.removeAttribute('data-hide');
    getElement2.removeAttribute('data-show');

    getElement1.setAttribute('data-show', "");
    getElement2.setAttribute('data-hide', "");
  }
}