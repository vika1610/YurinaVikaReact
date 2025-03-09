'use client';

import { DishCounter } from '../dishCounter/DishCounter';
import { useGetDishByIdQuery } from '../redux/services/api/api';

export const DishContainer = ({ dishId }) => {
  const { data, isFetching, isError } = useGetDishByIdQuery(dishId);

  const { name, price, ingredients } = data || {};

  if (isFetching) {
    return '...loading';
  }
  if (isError) {
    return 'error';
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <DishCounter menuItemId={dishId} />
      <span>price: {price}$</span>
      <br />
      <span>ingredients: {ingredients?.join(', ')}</span>
    </div>
  );
};
