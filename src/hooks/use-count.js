import { useState } from 'react';

export const useCount = ({ min = min, max = max } = {}) => {
  const [count, setCount] = useState({ value: min });

  const onIncrement = () => {
    setCount((prevState) => {
      if (prevState.value < max) {
        return {
          value: prevState.value + 1,
        };
      }
      return {
        value: prevState.value,
      };
    });
  };

  const onDecrement = () => {
    setCount((prevState) => {
      if (prevState.value > min) {
        return {
          value: prevState.value - 1,
        };
      }
      return {
        value: prevState.value,
      };
    });
  };

  return {
    count: count.value,
    onDecrement,
    onIncrement,
  };
};
