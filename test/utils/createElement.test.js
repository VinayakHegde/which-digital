import createElementWith from "../../src/utils/createElement";

describe('createElementWith', () => {
  it('should return a default (span) element when no options passed', () => {
    const el = createElementWith();
    expect(el.tagName).toEqual('SPAN');
  });

  it('should return a div element when tagName = "div" passed', () => {
    const el = createElementWith({tagName: 'div'});
    expect(el.tagName).toEqual('DIV');
  });

  it('should return the button element with no onClick handler', () => {
    const el = createElementWith({
      tagName: 'button', 
      onclick: 'onCLick'
    });
    expect(el.tagName).toEqual('BUTTON');
    expect(el.onclick).toBeNull();
  });

  it('should return the button element when passed with options', () => {
    const mockCallback = jest.fn();
    const el = createElementWith({
      tagName: 'button', 
      className: 'item__button',
      innerHTML: 'Test Button',
      onclick: mockCallback
    });
    expect(el.tagName).toEqual('BUTTON');
    expect(el.className).toEqual('item__button');
    expect(el.innerHTML).toEqual('Test Button');

    el.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
