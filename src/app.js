import ItemCollection from './components/item-collection/item-collection';
import * as settings from './appSetting.json'
// source goes here
export const appSettings = settings.default || {};

const app = () => {
  const itemCollection = new ItemCollection(appSettings)
  document.body.appendChild(itemCollection.element);
};

export default app;
