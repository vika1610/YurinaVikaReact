import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishes } from './get-dishes';
import { getDishById } from './get-dish-by-id';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
      }),
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectById: selectDishById,
  selectIds: selectDishesIds,
  selectTotal: selectTotalDishes,
} = entityAdapter.getSelectors(selectDishesSlice);
