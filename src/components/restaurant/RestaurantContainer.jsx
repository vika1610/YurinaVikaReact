import { Restaurant } from './Restaurant';
import {
  useAddReviewMutation,
  // useGetRestaurantByIdQuery,
  useGetRestaurantsQuery,
} from '../redux/services/api/api';
import { use, useCallback } from 'react';
import { UserContext } from '../userContext';

export const RestaurantContainer = ({ restaurantId }) => {
  const { user } = use(UserContext);
  // const { data, isFetching, isError } = useGetRestaurantByIdQuery(restaurantId); // можно с перезапросом

  const { data, isFetching, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    }),
  }); // можно без перезапроса

  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({
        restaurantId,
        review: {
          ...review,
          userId: user.userId,
        },
      });
    },
    [addReview, restaurantId, user.userId],
  );

  if (isFetching) {
    return '...loading';
  }
  if (isError) {
    return 'error';
  }

  if (!data) {
    return null;
  }

  const { name } = data || {};

  return (
    <Restaurant
      name={name}
      addReview={handleAddReview}
      addReviewLoading={isLoading}
    />
  );
};
