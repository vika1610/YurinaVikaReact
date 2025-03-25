'use client';

import { usePathname } from 'next/navigation';
import { TabLink } from '../tabLink/Tab.';
import c from './styles.module.scss';

export const RestaurantsTabs = ({ restaurants }) => {
  const pathname = usePathname();

  const getRestaurantsBasePath = () => {
    const parts = pathname.split('/');
    parts.pop();
    const newUrl = parts.join('/');
    return newUrl;
  };

  return (
    <div className={c.tabInner}>
      {restaurants.map(({ id, name }) => (
        <TabLink
          key={id}
          name={name}
          to={`/restaurants/${id}`}
          className={c.navLinkContainer}
          isActive={getRestaurantsBasePath() === `/restaurants/${id}`}
        />
      ))}
    </div>
  );
};
