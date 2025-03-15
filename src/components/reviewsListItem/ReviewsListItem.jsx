'use client';

import c from './styles.module.scss';

export const ReviewsListItem = ({ reviewsItem, userId, usersData }) => {
  const user = usersData?.find(({ id }) => userId === id);

  if (!user?.name) {
    return null;
  }

  return (
    <li className={c.listItem}>
      <span>{user.name}: </span>
      {reviewsItem}
    </li>
  );
};
