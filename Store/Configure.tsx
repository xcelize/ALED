import contactReducer from '../Store/Reducers/Contact';
import {combineReducers, createStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactReducer,
});
export default store = createStore(rootReducer);
