import { use } from 'react';
import cl from 'classnames';
import c from './styles.module.scss';
import { ThemeContext } from '../themeContext';
import { ReviewsListItemContainer } from '../reviewsListItem/ReviewsListItemContainer';

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
        {reviews.map((id) => (
          <ReviewsListItemContainer key={id} reviewsItemId={id} />
        ))}
      </ul>
    </div>
  );
};
