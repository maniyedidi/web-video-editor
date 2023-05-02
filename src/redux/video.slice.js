import { createSlice } from '@reduxjs/toolkit';
// create a slice
export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    length: 0
  },
  reducers: {
    setVideo: (state, action) => {
      state = action.payload;
      return state;
    },
    setVideoDuration: (state, action) => {      
      state.length = action.payload;
      return state;
    }
  }
});

// export the action
export const { setVideo, setVideoDuration } = videoSlice.actions;

export default videoSlice.reducer;
