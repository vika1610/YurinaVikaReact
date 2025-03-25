import cl from 'classnames';
import c from './styles.module.scss';
import { use } from 'react';
import { ThemeContext } from '../themeContext';
import { useFormStatus } from 'react-dom';

export const Button = ({ title, onClick, className, formAction }) => {
  const { theme } = use(ThemeContext);
  const { pending } = useFormStatus();
  return (
    <button
      className={cl(
        c.button,
        {
          [c.dark]: theme === 'dark',
        },
        className,
      )}
      formAction={formAction}
      disabled={pending}
      onClick={onClick}
    >
      {pending ? 'loading...' : title}
    </button>
  );
};
