import { Suspense } from 'react';
import { RestaurantContainer } from '../../../components/restaurant/RestaurantContainer';
import { getRestaurants } from '../../../services/get-restaurants';

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => restaurantId === id);

  return {
    title: restaurant.name,
  };
};

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback='...loading Restaurant'>
      <RestaurantContainer id={restaurantId}>{children}</RestaurantContainer>
    </Suspense>
  );
};

export default RestaurantLayout;
