'use client';

import { useSelector } from 'react-redux';
import { selectCartItemsIds } from '../redux/entities/cart/slice';
import { Cart } from './Cart';
import { use } from 'react';
import { UserContext } from '../userContext';

export const CartContainer = ({ dishes }) => {
  const { user } = use(UserContext);
  const itemsIds = useSelector(selectCartItemsIds);

  if (!itemsIds.length || !user.name) return null;

  return <Cart itemsIds={itemsIds} dishes={dishes} />;
};
