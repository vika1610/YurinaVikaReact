import { useParams } from 'react-router';
import { useGetDishByIdQuery } from '../components/redux/services/api/api';
import { DishCounter } from '../components/dishCounter/DishCounter';

export const DishPage = () => {
  const { dishId } = useParams();

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
