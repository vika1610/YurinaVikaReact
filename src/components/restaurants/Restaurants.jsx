import { RestaurantTab } from '../restaurantTab/RestaurantTab';
import c from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../redux/entities/restaurants/slice';
import { Outlet } from 'react-router';

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={c.container}>
      <div className={c.tabInner}>
        {restaurantsIds.map((id) => (
          <RestaurantTab restaurantId={id} key={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
