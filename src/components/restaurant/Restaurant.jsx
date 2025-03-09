'use client';

import { use } from 'react';
import { ReviewForm } from '../reviewForm/ReviewForm';
import c from './styles.module.scss';
import { UserContext } from '../userContext';
import { TabLink } from '../tabLink/Tab.';
import { usePathname } from 'next/navigation';

export const Restaurant = ({ name, addReview, addReviewLoading, children }) => {
  const { user } = use(UserContext);
  const pathname = usePathname();

  let url = pathname;
  let lastSlug = url.split('/').pop();

  if (!name) {
    return null;
  }

  return (
    <div className={c.container}>
      <h2 className={c.title}>{name}</h2>
      <div className={c.tabs}>
        <TabLink name={'меню'} to='menu' disabled={lastSlug === 'menu'} />
        <TabLink
          name={'отзывы'}
          to='reviews'
          disabled={lastSlug === 'reviews'}
        />
      </div>

      {children}

      {user.name && (
        <ReviewForm onSubmit={addReview} disableSubmit={addReviewLoading} />
      )}
    </div>
  );
};
