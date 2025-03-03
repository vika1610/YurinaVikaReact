import { useSelector } from 'react-redux';
import { MenuListItemContainer } from '../menuListItem/MenuListItemContainer';
import { getDishes } from '../redux/entities/dishes/get-dishes';
import { useRequest } from '../redux/entities/hooks/use-request';
import c from './styles.module.scss';
import { selectTotalDishes } from '../redux/entities/dishes/slice';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../redux/constants';

export const MenuList = ({ menu }) => {
  const requestStatus = useRequest(getDishes);
  const dishes = useSelector(selectTotalDishes);

  if (requestStatus === REQUEST_STATUS_PENDING || !dishes) {
    return '...loading';
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error';
  }

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
