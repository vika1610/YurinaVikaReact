'use client';

import { use } from 'react';
import cl from 'classnames';
import c from './styles.module.scss';
import { ThemeContext } from '../themeContext';
import { ReviewsListItem } from '../reviewsListItem/ReviewsListItem';
import { ReviewForm } from '../reviewForm/ReviewForm';
import { UserContext } from '../userContext';

export const ReviewsList = ({ reviewsData, usersData }) => {
  const { theme } = use(ThemeContext);
  const { user } = use(UserContext);

  return (
    <div
      className={cl(c.container, {
        [c.dark]: theme === 'dark',
      })}
    >
      <h3 className={c.title}>Отзывы</h3>
      <ul className={c.list}>
        {reviewsData?.map(({ id, text, userId }) => (
          <ReviewsListItem
            key={id}
            reviewsItem={text}
            userId={userId}
            usersData={usersData}
          />
        ))}
      </ul>
      {user.name && (
        <ReviewForm />
        // <ReviewForm onSubmit={addReview} disableSubmit={addReviewLoading} />
      )}
    </div>
  );
};
