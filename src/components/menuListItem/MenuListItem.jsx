import { DishCounter } from '../dishCounter/DishCounter';
import c from './styles.module.scss';

export const MenuListItem = ({ menuItem }) => {
  const { name } = menuItem;

  return (
    <li className={c.listItem}>
      <span className={c.name}>{name}</span>
      <DishCounter min={0} max={5} />
    </li>
  );
};
