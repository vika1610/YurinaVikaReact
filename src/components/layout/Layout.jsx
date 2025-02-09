import { ScrollProgressBar } from '../scrollProgressBar/ScrollProgressBar';
import c from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={c.container}>
      <ScrollProgressBar />
      <header className={c.header}>Header</header>
      <main className={c.main}>{children}</main>
      <footer className={c.footer}>Footer</footer>
    </div>
  );
};
