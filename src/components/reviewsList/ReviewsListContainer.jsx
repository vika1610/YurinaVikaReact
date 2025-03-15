import { ReviewsList } from './ReviewsList';
import { getReviewsByRestaurantId } from '../../services/get-reviews-by-restaurant-id';
import { getUsers } from '../../services/get-users';

export const ReviewsListContainer = async ({ restaurantId }) => {
  const reviewsData = getReviewsByRestaurantId(restaurantId);
  const usersData = getUsers();

  const [reviews, users] = await Promise.all([reviewsData, usersData]);

  return <ReviewsList reviewsData={reviews} usersData={users} />;
};
