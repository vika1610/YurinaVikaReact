import { useParams } from 'react-router';
import { MenuList } from '../components/MenuList/MenuList';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../components/redux/entities/restaurants/slice';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  const { menu } = restaurant || {};

  return menu ? <MenuList menu={menu} /> : <span>empty menu</span>;
};
