import { useSelector } from 'react-redux';
import { selectAmountByItemId } from '../redux/entities/cart/slice';
import { CartItem } from './CartItem';
import { selectDishesById } from '../redux/entities/dishes/slice';

export const CardItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const menuItem = useSelector((state) => selectDishesById(state, id));

  if (!menuItem) return null;

  return <CartItem amount={amount} menuItem={menuItem.name} />;
};
