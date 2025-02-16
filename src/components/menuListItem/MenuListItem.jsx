import { use } from 'react';
import { DishCounter } from '../dishCounter/DishCounter';
import c from './styles.module.scss';
import { UserContext } from '../userContext';

export const MenuListItem = ({ menuItem, menuItemId }) => {
  const { user } = use(UserContext);

  return (
    <li className={c.listItem}>
      <span className={c.name}>{menuItem}</span>
      {user.name && <DishCounter menuItemId={menuItemId} />}
    </li>
  );
};
