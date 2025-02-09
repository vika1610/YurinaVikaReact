import { use } from 'react';
import c from './styles.module.scss';
import cl from 'classnames';
import { ThemeContext } from '../themeContext';

export const RestaurantTab = ({ name, onClick, isActive }) => {
  const { theme } = use(ThemeContext);

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
