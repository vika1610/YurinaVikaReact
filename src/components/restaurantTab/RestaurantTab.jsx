import { use } from 'react';
import c from './styles.module.scss';
import cl from 'classnames';
import { ThemeContext } from '../themeContext';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';

export const RestaurantTab = ({ restaurantId, onClick, isActive }) => {
  const { theme } = use(ThemeContext);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <button
      className={cl(c.tabBtn, {
        [c.dark]: theme === 'dark',
      })}
      disabled={isActive}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
