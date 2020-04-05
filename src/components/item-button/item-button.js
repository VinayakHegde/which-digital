import createElementWith from "../../utils/createElement";
import './item-button.css';
/**
 * @class ItemButton
 */
export default class ItemButton {
  /**
   * @constructor
   * @param {object} props 
   */
  constructor(props) {
    const {number, notify, highlight} = props || {};
    this.number = number || 1;
    this.element = createElementWith({
      tagName: 'button', 
      className: 'item__button',
      innerHTML: this.number,
      onclick: notify && (typeof notify === 'function') 
        ? () => {
          notify(this);
        } : null
    });
    this.toggleClass(highlight);
  }

  /**
   * @method toggleClass - toggles the highlight class for the item
   * @param {boolean} highlight 
   */
  toggleClass(highlight) {
    this.highlight = highlight;
    if(highlight) {
      this.element.classList.add('highlight');
    } else {
      this.element.classList.remove('highlight');
    }
  }
}