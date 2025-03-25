import { Suspense } from 'react';
import { CartLayout } from '../cart/CartLayout';
import { Header } from '../header/Header';
import { ScrollProgressBar } from '../scrollProgressBar/ScrollProgressBar';
import c from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={c.container}>
      <ScrollProgressBar />
      <Header className={c.header} />
      <main className={c.main}>
        {children}
        <Suspense fallback='...loading Cart'>
          <CartLayout />
        </Suspense>
      </main>

      <footer className={c.footer}>Footer</footer>
    </div>
  );
};
