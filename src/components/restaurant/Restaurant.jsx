import { use } from 'react';
import { MenuList } from '../MenuList/MenuList';
import { ReviewForm } from '../reviewForm/ReviewForm';
import { ReviewsList } from '../reviewsList/ReviewsList';
import c from './styles.module.scss';
import { UserContext } from '../userContext';

export const Restaurant = ({ name, reviewsIds, menuIds }) => {
  const { user } = use(UserContext);

  if (!name) {
    return null;
  }

  return (
    <div className={c.container}>
      <h2 className={c.title}>{name}</h2>
      {Boolean(menuIds.length) && <MenuList menu={menuIds} />}
      {Boolean(reviewsIds.length) && <ReviewsList reviews={reviewsIds} />}
      {user.name && <ReviewForm />}
    </div>
  );
};
