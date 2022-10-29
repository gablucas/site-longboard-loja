export class ElementHandler {
  add(element, attribute) {
    if(typeof element === "string") {
      const getElement = document.querySelector(element);
      getElement.setAttribute(attribute, '');
    } else {
      element.setAttribute(attribute, '');
    }
  }

  remove(element, attribute) {
    if(typeof element === "string") {
      const getElement = document.querySelector(element);
      getElement.removeAttribute(attribute);
    } else {
      element.removeAttribute(attribute);
    }
  }

  toggle(element, attribute) {
    if(typeof element === "string") {
      const getElement = document.querySelector(element);
      getElement.toggleAttribute(attribute);
    } else {
      element.toggleAttribute(attribute);
    }
  }
}