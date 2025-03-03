import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/restaurant/RestaurantContainer';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantContainer restaurantId={restaurantId} />;
};
