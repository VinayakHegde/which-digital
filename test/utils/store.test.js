import Store from "../../src/utils/store";
import createRange from '../../src/utils/createRange';

describe('store', () => {
  const store = new Store();
  const mockToggleClass = jest.fn();

  const freshCreateStoreItems = (range) => {
    store.items = [];
    createRange(range).forEach(number =>{
      store.push({
        number,
        highlight: false,
        toggleClass: mockToggleClass
      });
    });
  };

  const highlightedItems = () => store.items
    .filter(({highlight}) => highlight )
    .map(({number}) => number);

  it('should have 0 as defaultSelection', () => {
    expect(store.defaultSelection).toEqual(0);
  });

  it('should create 10 items', () => {
    freshCreateStoreItems({to: 10, from: 1});
    expect(store.items.length).toEqual(10);
  });

  it('should create 10 items and set highlight for item and its multipliers', () => {
    freshCreateStoreItems({to: 10, from: 1});
    store.notify({highlight:false, number: 2});
    
    expect(highlightedItems().toString()).toEqual('2,4,6,8,10');

    store.notify({highlight:true, number: 4});
    expect(highlightedItems().toString()).toEqual('4,8');

    store.notify({highlight:true, number: 4});
    expect(highlightedItems().toString()).toEqual('');

    store.notify({highlight:false, number: 3});
    expect(highlightedItems().toString()).toEqual('3,6,9');
  });

  it('should true for isDivisible(10) when defaultSelection is 2 or 5', () => {
    store.defaultSelection = 2;
    expect(store.isDivisibe(10)).toBeTruthy();

    store.defaultSelection = 5;
    expect(store.isDivisibe(10)).toBeTruthy();
    
    store.defaultSelection = 3;
    expect(store.isDivisibe(10)).toBeFalsy();
    
    store.defaultSelection = 0;
    expect(store.isDivisibe(10)).toBeFalsy();
  });
});