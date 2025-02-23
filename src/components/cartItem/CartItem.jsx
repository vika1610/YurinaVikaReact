import c from './styles.module.scss';

export const CartItem = ({ amount, menuItem }) => {
  return (
    <div className={c.container}>
      {menuItem} - {amount}
    </div>
  );
};
