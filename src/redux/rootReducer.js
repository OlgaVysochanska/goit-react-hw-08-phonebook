import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
