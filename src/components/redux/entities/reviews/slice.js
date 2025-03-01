import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviews } from './get-reviews';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectReviewsSlice = (state) => state.reviews;

export const { selectById: selectReviewById, selectTotal: selectTotalReviews } =
  entityAdapter.getSelectors(selectReviewsSlice);
