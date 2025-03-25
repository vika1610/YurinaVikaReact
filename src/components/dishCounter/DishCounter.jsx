'use client';

import { useCount } from '../../hooks/use-count';
import { Counter } from '../counter/Counter';

export const DishCounter = ({ menuItemId }) => {
  const { amount, onDecrement, onIncrement } = useCount(menuItemId);

  return (
    <Counter
      count={amount}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
};
