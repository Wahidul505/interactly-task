import { configureStore } from '@reduxjs/toolkit';
import navigateSlice from '../features/navigateSlice';


const store = configureStore({
    reducer: {
        navigate: navigateSlice
    }
});

export default store;