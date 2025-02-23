import c from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';
import { Tab } from '../Tab/Tab.';

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <Tab
      name={name}
      to={`/restaurants/${restaurantId}`}
      className={c.navLinkContainer}
    />
  );
};
