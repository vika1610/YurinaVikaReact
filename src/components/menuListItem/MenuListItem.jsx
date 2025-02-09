import { use } from 'react';
import { DishCounter } from '../dishCounter/DishCounter';
import c from './styles.module.scss';
import { UserContext } from '../userContext';

export const MenuListItem = ({ menuItem }) => {
  const { user } = use(UserContext);
  const { name } = menuItem;

  return (
    <li className={c.listItem}>
      <span className={c.name}>{name}</span>
      {user.name && <DishCounter min={0} max={5} />}
    </li>
  );
};
