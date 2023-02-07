import {configureStore} from '@reduxjs/toolkit';
import contacts from '../Store/Reducers/Contact';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: contacts,
  middleware: [thunk],
});

export const persistor = persistStore(store);
