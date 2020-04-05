/**
 * @class Store for storing the items and performing actions
 */
export default class Store {
  /**
   * @constructor
   * @param {number} defaultSelection - default selection when app loads
   */
  constructor(props){
    this.items = [];
    this.defaultSelection = props ? props.defaultSelection : 0;
  }

  /**
   * @method notify - item click handler
   * @param {boolean} highlight - flag indicates if item is already in highlight state
   * @param {number} number - item number that is clicked
   */
  notify({highlight, number}) {  
    if(number > this.defaultSelection){
      this.defaultSelection = number;
    } else {
      this.defaultSelection = highlight ? 0 : number;
    }
    this.items.forEach(item => {
      item.highlight = this.isDivisibe(item.number);
      item.toggleClass && item.toggleClass(item.highlight);
    });
  }

  /**
   * @method push - pushed the item into the items array
   * @param {ItemNode} item - item that need to be stored
   */
  push(item) {
    if(item) {
      this.items.push(item);
    }
  }

  /**
   * @method isDivisibe - checks if  the number is divisible by the default selection
   * @param {number} number 
   * @returns {boolean}
   */
  isDivisibe(number) {
    return (this.defaultSelection > 0 ? number % this.defaultSelection === 0 : false)
  }
}