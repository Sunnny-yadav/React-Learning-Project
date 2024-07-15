import {configureStore} from '@reduxjs/toolkit';
import authReducers from '../redux/Slice'
import { thunk } from 'redux-thunk';
// https://chatgpt.com/share/88ff54d2-6224-4bdd-88c0-a24777ec842a you can perfer this link to make clear how reducer object should be created to configure the store

export const store = configureStore({
   reducer: authReducers,
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: false,
     }),
 });