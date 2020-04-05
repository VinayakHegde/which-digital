import ItemCollection from "../../src/components/item-collection/item-collection";

describe('item-collection', () => {
  it('should throw erros for bad options', () => {
    const ic1 = () => new ItemCollection();
    expect(ic1).toThrowError(TypeError);
    
    const ic2 = () => new ItemCollection({});
    expect(ic2).toThrowError(TypeError);
    
    const ic3 = () => new ItemCollection({to: 'abc', from: 'xyz' });
    expect(ic3).toThrowError(TypeError);

    const ic4 = () => new ItemCollection({to: 10, from: 11 });
    expect(ic4).toThrowError(RangeError);
    
    const ic5 = () => new ItemCollection({to: 10, from: 0 });
    expect(ic5).toThrowError(Error);
  });

  it('should create item-button component', () => {
    const ic = new ItemCollection({to: 10, from: 1 });
    expect(ic.element.children.length).toEqual(10);
  });
});