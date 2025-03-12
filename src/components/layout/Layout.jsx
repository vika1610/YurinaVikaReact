import { CartContainer } from '../cart/CartContainer';
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
        <CartContainer />
      </main>

      <footer className={c.footer}>Footer</footer>
    </div>
  );
};
