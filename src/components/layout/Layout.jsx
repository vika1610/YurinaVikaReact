import { Outlet } from 'react-router';
import { CartContainer } from '../cart/CartContainer';
import { Header } from '../header/Header';
import { ScrollProgressBar } from '../scrollProgressBar/ScrollProgressBar';
import c from './styles.module.scss';

export const Layout = () => {
  return (
    <div className={c.container}>
      <ScrollProgressBar />
      <Header className={c.header} />
      <main className={c.main}>
        <Outlet />
        <CartContainer />
      </main>

      <footer className={c.footer}>Footer</footer>
    </div>
  );
};
