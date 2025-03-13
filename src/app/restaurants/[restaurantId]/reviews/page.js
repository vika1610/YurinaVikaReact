import { ReviewsList } from '../../../../components/reviewsList/ReviewsList';

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <ReviewsList restaurantId={restaurantId} />;
};

export default ReviewsPage;
