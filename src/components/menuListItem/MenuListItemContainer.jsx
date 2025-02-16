import { useSelector } from 'react-redux';
import { selectDishesById } from '../redux/entities/dishes/slice';
import { MenuListItem } from './MenuListItem';

export const MenuListItemContainer = ({ menuItemId }) => {
  const menuItem = useSelector((state) => selectDishesById(state, menuItemId));

  const { name } = menuItem || {};

  return <MenuListItem menuItem={name} menuItemId={menuItemId} />;
};
