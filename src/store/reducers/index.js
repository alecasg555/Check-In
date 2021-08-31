import {combineReducers} from 'redux';
import {checkInReducer} from './checkInReducer';
const rootReducer = combineReducers({
  checkIn: checkInReducer
});

export default rootReducer;