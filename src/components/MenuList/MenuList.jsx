import c from './styles.module.scss';
import { MenuListItem } from '../menuListItem/MenuListItem';
import { getDishesByRestaurantId } from '../../services/get-dishes-by-restaurant-id';

export const MenuList = async ({ restaurantId }) => {
  const menu = await getDishesByRestaurantId(restaurantId);

  return (
    <div className={c.container}>
      <h3 className={c.title}>Меню</h3>
      <ul className={c.list}>
        {menu.map(({ id, name }) => (
          <MenuListItem key={id} menuItem={name} menuItemId={id} />
        ))}
      </ul>
    </div>
  );
};
