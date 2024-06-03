// // src/store/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../authSlice';


// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     },
// });

// export default store;

// src/store/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Your combined reducers file
import authReducer from '../authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
