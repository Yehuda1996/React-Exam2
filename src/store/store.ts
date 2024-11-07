// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";
import floorReducer from './floorreducer'


export const store = configureStore({
    reducer: {
        floors: floorReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;