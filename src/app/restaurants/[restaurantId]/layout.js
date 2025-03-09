import { RestaurantContainer } from '../../../components/restaurant/RestaurantContainer';

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantContainer restaurantId={restaurantId}>
      {children}
    </RestaurantContainer>
  );
};

export default RestaurantLayout;
