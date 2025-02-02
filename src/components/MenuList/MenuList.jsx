import { MenuListItem } from '../menuListItem/MenuListItem';
import c from './styles.module.scss';

export const MenuList = ({ menu }) => {
  return (
    <div className={c.container}>
      <h3 className={c.title}>Меню</h3>
      <ul className={c.list}>
        {menu.map((menuItem) => (
          <MenuListItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
};
