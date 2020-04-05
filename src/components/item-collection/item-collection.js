import createElementWith from '../../utils/createElement';
import createRange from '../../utils/createRange';
import Store from '../../utils/store';
import ItemButton from '../item-button/item-button';
import './item-collection.css'

/**
 * @class ItemCollection
 */
export default class ItemCollection {
  /**
   * @constructor
   * @param {object} props 
   */
  constructor(props) { 
    const store = new Store(props);
    this.element = createElementWith({className: 'item__collection'});
    
    (createRange(props) || []).forEach(number => {
      const itemButton = new ItemButton({
        number,
        notify: store.notify.bind(store),
        highlight: store.isDivisibe(number)
      });
      
      store.push(itemButton);

      this.element.appendChild(itemButton.element);
    });
  }
}
