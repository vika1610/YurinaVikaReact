import { Restaurant } from './Restaurant';
import { getRestaurants } from '../../services/get-restaurants';

export const RestaurantContainer = async ({ id, children }) => {
  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(
    ({ id: restaurantId }) => restaurantId === id,
  );

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant || {};

  return <Restaurant name={name}>{children}</Restaurant>;
};
