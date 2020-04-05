import ItemButton from "../../src/components/item-button/item-button";

describe('item-button', () => {
  it('should create a button element with no onClick handler', () => {
    const itemButton = new ItemButton();

    expect(itemButton.element.onclick).toBeNull();
    expect(itemButton.element.innerHTML).toBe("1");
  });

  it('should add/remove highlight class from button - toggleClass', () => {
    const itemButton = new ItemButton();

    itemButton.toggleClass(true);
    expect(itemButton.element.className).toBe('item__button highlight');
    
    itemButton.toggleClass(false);
    expect(itemButton.element.className).toBe('item__button');
  });
  
  it('should call notify function when button clicked', () => {
    const mockNotify = jest.fn();
    const itemButton = new ItemButton({
      notify: mockNotify,
    });
    itemButton.element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(mockNotify.mock.calls.length).toBe(1);
  });
});