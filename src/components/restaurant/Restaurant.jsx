import { MenuList } from '../MenuList/MenuList';
import { ReviewForm } from '../reviewForm/ReviewForm';
import { ReviewsList } from '../reviewsList/ReviewsList';
import c from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  const { name, reviews, menu } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div className={c.container}>
      <h2 className={c.title}>{name}</h2>
      {Boolean(menu.length) && <MenuList menu={menu} />}
      {Boolean(reviews.length) && <ReviewsList reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
