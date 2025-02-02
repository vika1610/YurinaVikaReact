import c from './styles.module.scss';

export const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className={c.counter}>
      <button className={c.btn} onClick={onDecrement}>
        −
      </button>
      <span className={c.value}>{count}</span>
      <button className={c.btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
