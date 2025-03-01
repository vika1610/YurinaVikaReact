import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/restaurant/RestaurantContainer';
import { useRequest } from '../components/redux/entities/hooks/use-request';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../components/redux/constants';
import { getRestaurantById } from '../components/redux/entities/restaurants/get-restaurant-by-id';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const requestStatus = useRequest(getRestaurantById, restaurantId);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return '...loading';
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error';
  }

  return <RestaurantContainer id={restaurantId} />;
};
