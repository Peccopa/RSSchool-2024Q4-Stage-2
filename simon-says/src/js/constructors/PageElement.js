export class PageElement {
  constructor(options = {}) {
    const {
      tag = 'div',
      text = '',
      classes = [],
      attribute = [],
      parent,
    } = options;
    const element = document.createElement(tag);
    element.textContent = text;
    if (classes.length > 0) element.classList.add(...classes);
    if (attribute.length > 0) element.setAttribute(...attribute);
    if (parent != null) parent.appendChild(element);
    return element;
  }
}
