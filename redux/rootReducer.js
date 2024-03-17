import { combineReducers } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice'; 

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default rootReducer;
