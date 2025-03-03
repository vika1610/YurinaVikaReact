import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantsIds } from './slice';

export const getRestaurantById = createAsyncThunk(
  'restaurants/getRestaurantById',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`,
    );

    const result = await response.json();

    if (!result) {
      rejectWithValue('no data');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantsIds(getState(), restaurantId);
    },
  },
);
