import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectRestaurantById } from '../components/redux/entities/restaurants/slice';
import { ReviewsList } from '../components/reviewsList/ReviewsList';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  const { reviews } = restaurant || {};

  return reviews ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <span>empty reviews</span>
  );
};
