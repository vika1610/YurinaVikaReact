import { useSelector } from 'react-redux';
import { selectReviewById } from '../redux/entities/reviews/slice';
import { ReviewsListItem } from './ReviewsListItem';

export const ReviewsListItemContainer = ({ reviewsItemId }) => {
  const reviewsItem = useSelector((state) =>
    selectReviewById(state, reviewsItemId),
  );

  const { text, userId } = reviewsItem || {};

  return <ReviewsListItem reviewsItem={text} userId={userId} />;
};

// may be deleted
