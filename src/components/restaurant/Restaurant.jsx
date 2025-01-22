import { MenuItem } from '../menuItem/MenuItem';
import { ReviewsItem } from '../reviewsItem/ReviewsItem';

export const Restaurant = ({ restaurant }) => {
  const { name, reviews, menu } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && (
        <div>
          <h3>Меню</h3>
          <ul>
            {menu.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          </ul>
        </div>
      )}

      {Boolean(reviews.length) && (
        <div>
          <h3>Отзывы</h3>
          <ul>
            {reviews.map((reviewsItem) => (
              <ReviewsItem key={reviewsItem.id} reviewsItem={reviewsItem} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
