import app, {appSettings} from '../src/app';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('app', function() {
  it('does nothing', function() {
    expect(true).toBe(true);
  });

  it('should render the item-collection component and children', () => {
    app();
    const itemCollection = document.querySelectorAll('.item__collection');
    expect(itemCollection.length).toEqual(1);
    expect(itemCollection[0].children.length).toEqual(appSettings.to);
  });

  it('should render the item-button components appSettings.to times', () => {
    app();
    const itemButtons = document.querySelectorAll('.item__button');
    expect(itemButtons.length).toEqual(appSettings.to);
  });
});

describe('integration test', () => {
  it('should work correctly on integration', () => {
    app();
    const itemButtons = document.querySelectorAll('.item__button');
    expect(itemButtons.length).toEqual(appSettings.to);

    let itemButtonsHighlighted = document.querySelectorAll('.highlight');
    expect(itemButtonsHighlighted.length).toBe(0);

    // click #72
    let number = 72;
    let button = itemButtons[number - 1];
    button.dispatchEvent(new MouseEvent('click'));
    itemButtonsHighlighted = document.querySelectorAll('.highlight');
    expect(itemButtonsHighlighted.length).toBe(2);
    expect(itemButtonsHighlighted[0].innerHTML).toBe("72");
    expect(itemButtonsHighlighted[1].innerHTML).toBe("144");

    // click #10
    number = 10;
    button = itemButtons[number - 1];
    button.dispatchEvent(new MouseEvent('click'));
    itemButtonsHighlighted = document.querySelectorAll('.highlight');
    expect(itemButtonsHighlighted.length).toBe(14);

    // click #10 again   
    button.dispatchEvent(new MouseEvent('click'));
    itemButtonsHighlighted = document.querySelectorAll('.highlight');
    expect(itemButtonsHighlighted.length).toBe(0);
  })
});
