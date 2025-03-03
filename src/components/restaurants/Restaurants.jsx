import c from './styles.module.scss';
import { Outlet } from 'react-router';
import { useGetRestaurantsQuery } from '../redux/services/api/api';
import { TabLink } from '../tabLink/Tab.';

export const Restaurants = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return '...loading';
  }
  if (isError) {
    return 'error';
  }
  if (!data?.length) {
    return null;
  }

  return (
    <div className={c.container}>
      <div className={c.tabInner}>
        {data.map(({ id, name }) => (
          <TabLink
            key={id}
            name={name}
            to={`/restaurants/${id}`}
            className={c.navLinkContainer}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
