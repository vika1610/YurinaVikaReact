import { Suspense } from 'react';
import { RestaurantsTabsContainer } from '../restaurantsTabs/RestaurantsTabsContainer';
import c from './styles.module.scss';

export const Restaurants = ({ children }) => {
  return (
    <div className={c.container}>
      <Suspense fallback='...loading RestaurantsTabs'>
        <RestaurantsTabsContainer />
      </Suspense>
      {children}
    </div>
  );
};
