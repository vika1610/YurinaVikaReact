import { ReviewsListItem } from '../reviewsListItem/ReviewsListItem';

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((reviewsItem) => (
          <ReviewsListItem key={reviewsItem.id} reviewsItem={reviewsItem} />
        ))}
      </ul>
    </div>
  );
};
