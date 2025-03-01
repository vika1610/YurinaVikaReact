import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurantById } from './get-restaurant-by-id';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        // state.ids = payload.map(({ id }) => id);
        // state.entities = payload.reduce((acc, item) => {
        //   acc[item.id] = item;
        //   return acc;
        // }, {}); // оставила для себя этот кусок, для понимания, что происходит внутри
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
      }),
});

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectTotalRestaurants,
} = entityAdapter.getSelectors(selectRestaurantsSlice);
