import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './video.slice';
import cropReducer from './crop.slice';

// config the store
const store = configureStore({
  reducer: {
    originalVideo: videoReducer,
    crop: cropReducer
  }
});

// export default the store
export default store;
