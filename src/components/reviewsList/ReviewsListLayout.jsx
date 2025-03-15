import { getReviewsByRestaurantId } from '../../services/get-reviews-by-restaurant-id';
import { getUsers } from '../../services/get-users';
import { ReviewsListContainer } from './ReviewsListContainer';

export const ReviewsListLayout = async ({ restaurantId }) => {
  const reviewsData = getReviewsByRestaurantId(restaurantId);
  const usersData = getUsers();

  const [reviews, users] = await Promise.all([reviewsData, usersData]);

  return (
    <ReviewsListContainer
      reviews={reviews}
      users={users}
      restaurantId={restaurantId}
    />
  );
};
