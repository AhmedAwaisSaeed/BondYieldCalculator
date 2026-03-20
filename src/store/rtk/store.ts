import { configureStore } from '@reduxjs/toolkit';

/**
 * RTK store — slices will be added in future phases as needed.
 * Bond calculator state is managed by Zustand (lightweight, form-scoped).
 * RTK is available for async flows, caching, or complex server state.
 */
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
