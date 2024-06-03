// src/store/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../services/axios';
// export const signUp = createAsyncThunk('auth/signUp', async (userData, { rejectWithValue }) => {
//     try {
//         const response = await axiosInstance.post('/signup', userData);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data);
//     }
// });

// export const signIn = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
//     try {
//         const response = await axiosInstance.post('/signin', credentials);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data);
//     }
// });

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         token: null,
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//             state.token = null;
//             localStorage.removeItem('token');
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(signUp.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signUp.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 localStorage.setItem('token', action.payload.token);
//             })
//             .addCase(signUp.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(signIn.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signIn.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//                 localStorage.setItem('token', action.payload.token);
//             })
//             .addCase(signIn.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../services/axios';

export const signUp = createAsyncThunk('auth/signUp', async (userData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/signup', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const signIn = createAsyncThunk('auth/signIn', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/signin', credentials);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signIn.pending, (state) => {
                state.loading = true;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
