import { useSelector } from 'react-redux';
import { selectDishById } from '../redux/entities/dishes/slice';
import { MenuListItem } from './MenuListItem';

export const MenuListItemContainer = ({ menuItemId }) => {
  const menuItem = useSelector((state) => selectDishById(state, menuItemId));

  const { name } = menuItem || {};

  return <MenuListItem menuItem={name} />;
};
