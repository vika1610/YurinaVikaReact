'use client';

import { use } from 'react';
import { DishCounter } from '../dishCounter/DishCounter';
import c from './styles.module.scss';
import { UserContext } from '../userContext';
import Link from 'next/link';

export const MenuListItem = ({ menuItem, menuItemId }) => {
  const { user } = use(UserContext);

  return (
    <li className={c.listItem}>
      <Link href={`/dish/${menuItemId}`} className={c.name}>
        {menuItem}
      </Link>
      {user.name && <DishCounter menuItemId={menuItemId} />}
    </li>
  );
};
