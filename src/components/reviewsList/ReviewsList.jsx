'use client';

import { use } from 'react';
import cl from 'classnames';
import c from './styles.module.scss';
import { ThemeContext } from '../themeContext';
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from '../redux/services/api/api';
import { ReviewsListItem } from '../reviewsListItem/ReviewsListItem';

export const ReviewsList = ({ restaurantId }) => {
  const { theme } = use(ThemeContext);

  const {
    data: reviewsData,
    isLoading: reviewsIsLoading,
    isError: reviewsIsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const { isLoading: usersIsLoading, isError: usersIsError } =
    useGetUsersQuery();

  if (reviewsIsLoading || usersIsLoading) {
    return '...loading';
  }

  if (reviewsIsError || usersIsError) {
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
        {reviewsData?.map(({ id, text, userId }) => (
          <ReviewsListItem key={id} reviewsItem={text} userId={userId} />
        ))}
      </ul>
    </div>
  );
};
