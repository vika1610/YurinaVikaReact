import cl from 'classnames';
import { ToggleThemeBtn } from '../toggleThemeBtn/ToggleThemeBtn';
import c from './styles.module.scss';
import { AuthorizationBlock } from '../authorizationBlock/AuthorizationBlock';

export const Header = ({ className }) => {
  return (
    <header className={cl(c.header, className)}>
      <ToggleThemeBtn />
      <AuthorizationBlock />
    </header>
  );
};
