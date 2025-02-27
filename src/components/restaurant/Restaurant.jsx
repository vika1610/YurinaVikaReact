import { use } from 'react';
import { ReviewForm } from '../reviewForm/ReviewForm';
import c from './styles.module.scss';
import { UserContext } from '../userContext';
import { Outlet } from 'react-router';
import { TabLink } from '../tabLink/Tab.';

export const Restaurant = ({ name }) => {
  const { user } = use(UserContext);

  if (!name) {
    return null;
  }

  return (
    <div className={c.container}>
      <h2 className={c.title}>{name}</h2>
      <div className={c.tabs}>
        <TabLink name={'меню'} to='menu' />
        <TabLink name={'отзывы'} to='reviews' />
      </div>

      <Outlet />

      {user.name && <ReviewForm />}
    </div>
  );
};
