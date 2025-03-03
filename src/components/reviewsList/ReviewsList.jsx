import { use } from 'react';
import cl from 'classnames';
import c from './styles.module.scss';
import { ThemeContext } from '../themeContext';
import { ReviewsListItemContainer } from '../reviewsListItem/ReviewsListItemContainer';
import { useRequest } from '../redux/entities/hooks/use-request';
import { getUsers } from '../redux/entities/users/get-users';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../redux/constants';
import { useSelector } from 'react-redux';
import { selectTotalUsers } from '../redux/entities/users/slice';
import { getReviews } from '../redux/entities/reviews/get-reviews';
import { selectTotalReviews } from '../redux/entities/reviews/slice';

export const ReviewsList = ({ reviews }) => {
  const { theme } = use(ThemeContext);

  const requestUsersStatus = useRequest(getUsers);
  const requestReviewsStatus = useRequest(getReviews);

  const usersTotal = useSelector(selectTotalUsers);
  const reviewsTotal = useSelector(selectTotalReviews);

  if (
    requestUsersStatus === REQUEST_STATUS_PENDING ||
    requestReviewsStatus === REQUEST_STATUS_PENDING ||
    !usersTotal ||
    !reviewsTotal
  ) {
    return '...loading';
  }

  if (
    requestUsersStatus === REQUEST_STATUS_REJECTED ||
    requestReviewsStatus === REQUEST_STATUS_REJECTED
  ) {
    return 'error';
  }

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
