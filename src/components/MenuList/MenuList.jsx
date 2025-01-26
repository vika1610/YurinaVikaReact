import { MenuListItem } from '../menuListItem/MenuListItem';

export const MenuList = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <MenuListItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
};
