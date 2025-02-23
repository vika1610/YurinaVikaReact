import { useSelector } from 'react-redux';
import { selectAmountByItemId } from '../redux/entities/cart/slice';
import { CartItem } from './CartItem';
import { selectDishById } from '../redux/entities/dishes/slice';
import { DishCounter } from '../dishCounter/DishCounter';

export const CardItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const menuItem = useSelector((state) => selectDishById(state, id));

  if (!menuItem) return null;

  return (
    <>
      <CartItem amount={amount} menuItem={menuItem.name} />
      <DishCounter menuItemId={id} />
    </>
  );
};
