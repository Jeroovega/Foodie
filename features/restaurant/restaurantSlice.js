import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRestaurantById } from '../../utils/restaurants';
import { createSelector } from 'reselect';

export const fetchRestaurantById = createAsyncThunk(
    'restaurants/fetchById',
    async (id) => {
        const response = await getRestaurantById(id);
        return response.data;
    }
);

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: {},
    reducers: {},
    extraReducers: (builded) => {
        builded.addCase(fetchRestaurantById.fulfilled, (state, action) => {
            return { ...state, restaurant: action.payload };
        });
    },
    immer: false,
});

export default restaurantSlice.reducer;

export const selectRestaurantById = createSelector(
    (state) => state.restaurants,
    (restaurants) => restaurants.restaurant
);