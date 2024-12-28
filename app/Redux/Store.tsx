import { CartSlice } from './Cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
export const CreateStore = () => {
    return configureStore({
        reducer: CartSlice.reducer
    })
}

// infering the type of createStore
export type AppStore = ReturnType<typeof CreateStore>;
// infering the type of rootState
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
