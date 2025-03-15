import { Suspense } from 'react';
import { ReviewsListLayout } from '../../../../components/reviewsList/ReviewsListLayout';

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return (
    <Suspense fallback='...loading ReviewsList'>
      <ReviewsListLayout restaurantId={restaurantId} />
    </Suspense>
  );
};

export default ReviewsPage;
