import { CardItemContainer } from '../cartItem/CartItemContainer';
import c from './styles.module.scss';

export const Cart = ({ itemsIds, dishes }) => {
  return (
    <div className={c.container}>
      <h3 className={c.title}>Cart</h3>
      <ul className={c.list}>
        {itemsIds.map((id) => (
          <li key={id}>
            <CardItemContainer id={id} dishes={dishes} />
          </li>
        ))}
      </ul>
    </div>
  );
};
