import { useCount } from '../../hooks/use-count';
import { Counter } from '../counter/Counter';

export const DishCounter = ({ min: min, max: max }) => {
  const { count, onDecrement, onIncrement } = useCount({ min: min, max: max });

  return (
    <Counter
      count={count}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
};
