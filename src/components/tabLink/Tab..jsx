import { NavLink } from 'react-router';
import cl from 'classnames';
import { ThemeContext } from '../themeContext';
import { use } from 'react';
import c from './styles.module.scss';

export const TabLink = ({ to, name, className }) => {
  const { theme } = use(ThemeContext);

  return (
    <NavLink to={to} className={className}>
      {({ isActive }) => (
        <button
          className={cl(c.tabBtn, {
            [c.dark]: theme === 'dark',
          })}
          disabled={isActive}
        >
          {name}
        </button>
      )}
    </NavLink>
  );
};
