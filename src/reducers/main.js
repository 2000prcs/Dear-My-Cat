import { combineReducers } from 'redux';
import changeAction from './changeAction.js';
import changeCat from './changeCat.js';
import changeEnding from './changeEnding.js';


export default combineReducers({
  changeAction,
  changeCat,
  changeEnding
});
