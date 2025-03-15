import { Suspense } from 'react';
import { ReviewsListContainer } from '../../../../components/reviewsList/ReviewsListContainer';

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return (
    <Suspense fallback='...loading ReviewsList'>
      <ReviewsListContainer restaurantId={restaurantId} />
    </Suspense>
  );
};

export default ReviewsPage;
