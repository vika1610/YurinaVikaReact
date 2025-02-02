import { ScrollProgressBar } from '../scrollProgressBar/ScrollProgressBar';
import { ToggleThemeBtn } from '../toggleThemeBtn/ToggleThemeBtn';
import c from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={c.container}>
      <ScrollProgressBar />
      <header className={c.header}>
        <ToggleThemeBtn />
      </header>
      <main className={c.main}>{children}</main>
      <footer className={c.footer}>Footer</footer>
    </div>
  );
};
