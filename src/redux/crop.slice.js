import { createSlice } from '@reduxjs/toolkit';
// create a slice
export const cropSlice = createSlice({
  name: 'crop',
  initialState: {
    crop: {}
  },
  reducers: {
    setCrop: (state, action) => {
      state.crop = action.payload;
    }
  }
});

// export the action
export const { setCrop } = cropSlice.actions;

export default cropSlice.reducer;
