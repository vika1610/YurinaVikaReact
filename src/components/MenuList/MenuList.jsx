import { MenuListItemContainer } from '../menuListItem/MenuListItemContainer';
import c from './styles.module.scss';

export const MenuList = ({ menu }) => {
  return (
    <div className={c.container}>
      <h3 className={c.title}>Меню</h3>
      <ul className={c.list}>
        {menu.map((id) => (
          <MenuListItemContainer key={id} menuItemId={id} />
        ))}
      </ul>
    </div>
  );
};
