import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;

export const loadFavoritesFromStorage = () => async (dispatch) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    if (favorites !== null) {
      dispatch(setFavorites(JSON.parse(favorites)));
    }
  } catch (error) {
    console.error('Error loading favorites from AsyncStorage:', error);
  }
};

export const addToFavorites = (character) => async (dispatch, getState) => {
  try {
    const favorites = getState().favorites;
    if (favorites.length >= 10) {
      console.log('You cannot add more than 10 favorite characters.');
      return;
    }
    const updatedFavorites = [...favorites, character];
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    dispatch(setFavorites(updatedFavorites));
  } catch (error) {
    console.error('Error adding favorite character:', error);
  }
};

export const removeFromFavorites = (characterId) => async (dispatch, getState) => {
  try {
    const favorites = getState().favorites;
    const updatedFavorites = favorites.filter(character => character.id !== characterId);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    dispatch(setFavorites(updatedFavorites));
  } catch (error) {
    console.error('Error removing favorite character:', error);
  }
};

export default favoriteSlice.reducer;
