export class ElementHandler {
  constructor() {

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