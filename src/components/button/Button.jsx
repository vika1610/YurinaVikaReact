import cl from 'classnames';
import c from './styles.module.scss';
import { use } from 'react';
import { ThemeContext } from '../themeContext/index.';

export const Button = ({ title, onClick, disabled, className }) => {
  const { theme } = use(ThemeContext);
  return (
    <button
      className={cl(
        c.button,
        {
          [c.dark]: theme === 'dark',
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
