'use client';

import c from './styles.module.scss';

import { useGetDishesByRestaurantIdQuery } from '../redux/services/api/api';
import { MenuListItem } from '../menuListItem/MenuListItem';

export const MenuList = ({ restaurantId }) => {
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return '...loading';
  }

  if (isError) {
    return 'error';
  }

  return (
    <div className={c.container}>
      <h3 className={c.title}>Меню</h3>
      <ul className={c.list}>
        {data.map(({ id, name }) => (
          <MenuListItem key={id} menuItem={name} menuItemId={id} />
        ))}
      </ul>
    </div>
  );
};
