import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState({ value: 0 });

  const onIncrement = () => {
    setCount((prevState) => {
      if (prevState.value < 5) {
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
      if (prevState.value > 0) {
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
