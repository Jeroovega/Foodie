import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginJWT } from "../../utils/auth";

export const login = createAsyncThunk('u/login', async ({ email, password }) => {
    try {
        const response = await loginJWT({ email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        token: null,
        isAuth: false,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.token;
            state.isAuth = true;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.email = null;
            state.token = null;
            state.isAuth = false;
            state.error = action.error.message;
        });
    },
});

export const { logout } = loginSlice.actions;   

export default loginSlice.reducer;