import { useSelector } from 'react-redux';
import { DishCounter } from '../dishCounter/DishCounter';
import { selectDishById } from '../redux/entities/dishes/slice';

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name, price, ingredients } = dish || {};

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
