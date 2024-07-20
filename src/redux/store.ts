import { configureStore } from "@reduxjs/toolkit";
import templatesReducer from './templatesSlice'; // Import the templatesReducer from the correct location

export const store = configureStore({
  reducer: {
    templateEmail: templatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;