'use client';

import { use, useCallback, useOptimistic } from 'react';
import { ReviewsList } from './ReviewsList';
import { usePathname } from 'next/navigation';
import { UserContext } from '../userContext';
import { addReviewAction } from '../../actions/add-review-action';

export const ReviewsListContainer = ({ reviews, users, restaurantId }) => {
  const pathname = usePathname();
  const { user } = use(UserContext);

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: 'creating' },
    ],
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: '',
          rating: 5,
        };
      }

      const text = formData.get('text');
      const rating = formData.get('rating');

      const review = { text, rating, userId: user.userId };

      addOptimisticReview(review);

      await addReviewAction({ restaurantId, pathname, review });

      return {
        text: 'default',
        rating: 5,
      };
    },
    [addOptimisticReview, restaurantId, pathname, user.userId],
  );

  if (!optimisticReviews.length) {
    return null;
  }

  return (
    <ReviewsList
      reviewsData={reviews}
      usersData={users}
      onAddReview={handleAddReview}
    />
  );
};
