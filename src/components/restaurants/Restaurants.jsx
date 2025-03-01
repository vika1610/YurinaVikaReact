import { RestaurantTab } from '../restaurantTab/RestaurantTab';
import c from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../redux/entities/restaurants/slice';
import { Outlet } from 'react-router';
import { getRestaurants } from '../redux/entities/restaurants/get-restaurants';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../redux/constants';
import { useRequest } from '../redux/entities/hooks/use-request';

export const Restaurants = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (requestStatus === REQUEST_STATUS_PENDING || !restaurantsIds?.length) {
    return '...loading';
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error';
  }

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
