import { getDishById } from '../../services/get-dish-by-id';
import { DishCounter } from '../dishCounter/DishCounter';

export const DishContainer = async ({ dishId }) => {
  const dish = await getDishById(dishId);
  const { name, price, ingredients } = dish || {};

  if (!dish) {
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
