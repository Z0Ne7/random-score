import { combineReducers } from 'redux';
import randomReducer from './randomReducer';

const rootReducer = combineReducers({
  randomScore: randomReducer,
});

export default rootReducer;