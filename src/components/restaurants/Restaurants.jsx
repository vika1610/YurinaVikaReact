'use client';

import c from './styles.module.scss';
import { useGetRestaurantsQuery } from '../redux/services/api/api';
import { TabLink } from '../tabLink/Tab.';
import { usePathname } from 'next/navigation';

export const Restaurants = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();
  const pathname = usePathname();

  const getRestaurantsBasePath = () => {
    const parts = pathname.split('/');
    parts.pop();
    const newUrl = parts.join('/');
    return newUrl;
  };

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
            isActive={getRestaurantsBasePath() === `/restaurants/${id}`}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
