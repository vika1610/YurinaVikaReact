import { use } from 'react';
import cl from 'classnames';
import { ReviewsListItem } from '../reviewsListItem/ReviewsListItem';
import c from './styles.module.scss';
import { ThemeContext } from '../themeContext';

export const ReviewsList = ({ reviews }) => {
  const { theme } = use(ThemeContext);

  return (
    <div
      className={cl(c.container, {
        [c.dark]: theme === 'dark',
      })}
    >
      <h3 className={c.title}>Отзывы</h3>
      <ul className={c.list}>
        {reviews.map((reviewsItem) => (
          <ReviewsListItem key={reviewsItem.id} reviewsItem={reviewsItem} />
        ))}
      </ul>
    </div>
  );
};
