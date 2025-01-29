import { ReviewsListItem } from '../reviewsListItem/ReviewsListItem';
import c from './styles.module.scss';

export const ReviewsList = ({ reviews }) => {
  return (
    <div className={c.container}>
      <h3 className={c.title}>Отзывы</h3>
      <ul className={c.list}>
        {reviews.map((reviewsItem) => (
          <ReviewsListItem key={reviewsItem.id} reviewsItem={reviewsItem} />
        ))}
      </ul>
    </div>
  );
};
