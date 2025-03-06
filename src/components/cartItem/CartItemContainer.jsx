import { useSelector } from 'react-redux';
import { selectAmountByItemId } from '../redux/entities/cart/slice';
import { CartItem } from './CartItem';
import { DishCounter } from '../dishCounter/DishCounter';
import { useGetDishByIdQuery } from '../redux/services/api/api';

export const CardItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));

  const { data } = useGetDishByIdQuery(id);

  if (!data) return null;

  return (
    <>
      <CartItem amount={amount} menuItem={data.name} />
      <DishCounter menuItemId={id} />
    </>
  );
};
