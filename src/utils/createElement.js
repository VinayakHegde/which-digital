/**
 * @method createElement - creates element
 * @param {string} tagName 
 * @returns{HTMLElement}
 */
const createElement = tagName => document.createElement(tagName || 'span');

/**
 * @method createElementWith - creates element from options supplied
 * @param {object} options - create element options
 * @returns{HTMLElement}
 */
const createElementWith = (options = {}) => {
  const {tagName, className, innerHTML, onclick} = options;
  const el = createElement(tagName);

  // add class name
  className && el.classList.add(className);

  // set innierHTML
  innerHTML && (el.innerHTML = innerHTML);

  // onClick event handler
  (onclick && (typeof onclick === 'function')) && (el.onclick = onclick);

  return el;
};

export default createElementWith;