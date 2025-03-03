import { useParams } from 'react-router';
import { ReviewsList } from '../components/reviewsList/ReviewsList';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsList restaurantId={restaurantId} />;
};
