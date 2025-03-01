import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectTotalReviews } from './slice';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue('no data');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectTotalReviews(getState());
    },
  },
);
