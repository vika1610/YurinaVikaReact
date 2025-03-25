import { Suspense } from 'react';
import { RestaurantContainer } from './RestaurantContainer';

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback='...loading Restaurant'>
      <RestaurantContainer id={restaurantId}>{children}</RestaurantContainer>
    </Suspense>
  );
};
