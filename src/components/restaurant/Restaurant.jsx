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

  const lastSlug = pathname.split('/').pop();

  if (!name) {
    return null;
  }

  return (
    <div className={c.container}>
      <h2 className={c.title}>{name}</h2>
      <div className={c.tabs}>
        <TabLink name={'меню'} to='menu' isActive={lastSlug === 'menu'} />
        <TabLink
          name={'отзывы'}
          to='reviews'
          isActive={lastSlug === 'reviews'}
        />
      </div>

      {children}

      {user.name && (
        <ReviewForm onSubmit={addReview} disableSubmit={addReviewLoading} />
      )}
    </div>
  );
};
