import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectDishById } from '../components/redux/entities/dishes/slice';
import { DishCounter } from '../components/dishCounter/DishCounter';

export const DishPage = () => {
  const { dishId } = useParams();

  const dish = useSelector((state) => selectDishById(state, dishId));

  const { name, price, ingredients } = dish || {};

  return (
    <div>
      <h2>{name}</h2>
      <DishCounter menuItemId={dishId} />
      <span>price: {price}$</span>
      <br />
      <span>ingredients: {ingredients.join(', ')}</span>
    </div>
  );
};
