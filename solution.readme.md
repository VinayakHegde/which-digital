# Solution
__[appSetting.json](src/appSetting.json)__


app settings are defined here. Example: a grid that starts from 1 and ends with 144 and default selected number to be 0.

__[Components](src/components)__

[-> ItemCollection](src/components/item-collection/item-collection.js)

Class that renders the wrapper and the number buttons between the range passed into to the class.

Each button rendered are stored in store for toggling the class when other number buttons clicked.

[-> ItemButton](src/components/item-button/item-button.js)

Class that renders the number button and provides a method to to toggle the class for the element.

__[Utilities](src/utils)__

[-> createElementWith](src/utils/createElement.js)

A wrapper method document.createElement() with options like className, onclick handler etc..

[-> createRange](src/utils/createRange.js)

A method to create array of numbers from given range. 

[-> store](src/utils/store.js)

The store keeps the item buttons ([ItemButton](src/components/item-button/item-button.js)) in the dom. The store method notify calls on each time when the item button is clicked and resets the highlight class of each button.


__[Test](src/test)__

Units tests for each module are under Test folder. 

## Current limitations and what can be improved:
- a. __Current behaviour__: if Button #4 is clicked, 4 and it multiples are highlighted in red. If user clicks Button #3, 4 and its multiples are not highighted as user needs to know multiples of 3.

  b. __What can be improved__: 
  - Highlight multiples of 3 and multiples of 4 together in different colour. But how to highlight a number which is multple of both 3 and 4?  
  - Get user confirmation if a number is already highlighed and to change to another number's multiples.

