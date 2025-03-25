import { useSelector } from 'react-redux';
import { selectAmountByItemId } from '../redux/entities/cart/slice';
import { CartItem } from './CartItem';
import { DishCounter } from '../dishCounter/DishCounter';

export const CardItemContainer = ({ id, dishes }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));

  const dish = dishes.find(({ id: dishId }) => dishId === id);

  if (!dish) return null;

  return (
    <>
      <CartItem amount={amount} menuItem={dish.name} />
      <DishCounter menuItemId={id} />
    </>
  );
};
