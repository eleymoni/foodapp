import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (
          state.value.find(e => e.name === action.payload.name)
      ) {
          state.value =
              state.value.filter(
                  (e) => e.name !== action.payload.name
              );
      } else {
          state.value.push(action.payload);
      }
  },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;