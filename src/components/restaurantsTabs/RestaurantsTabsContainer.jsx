import { getRestaurants } from '../../services/get-restaurants';
import { RestaurantsTabs } from './RestaurantsTabs';

export const RestaurantsTabsContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <RestaurantsTabs restaurants={restaurants} />;
};
