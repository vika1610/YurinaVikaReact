import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from '../components/redux/entities/cart/slice';
import { useCallback } from 'react';

export const useCount = (menuItemId) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectAmountByItemId(state, menuItemId)) || 0;

  const onIncrement = useCallback(
    () => dispatch(addToCart(menuItemId)),
    [dispatch, menuItemId],
  );

  const onDecrement = useCallback(
    () => dispatch(removeFromCart(menuItemId)),
    [dispatch, menuItemId],
  );

  return {
    amount,
    onDecrement,
    onIncrement,
  };
};
