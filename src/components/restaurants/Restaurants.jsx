import { useState } from 'react';
import { RestaurantTab } from '../restaurantTab/RestaurantTab';
import c from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../redux/entities/restaurants/slice';
import { RestaurantContainer } from '../restaurant/RestaurantContainer';

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds?.[0],
  );

  const changeRestaurantId = (id) => {
    if (activeRestaurantId === id) return;
    setActiveRestaurantId(id);
  };

  return (
    <div className={c.container}>
      <div className={c.tabInner}>
        {restaurantsIds.map((id) => (
          <RestaurantTab
            restaurantId={id}
            key={id}
            onClick={() => changeRestaurantId(id)}
            isActive={id === activeRestaurantId}
          />
        ))}
      </div>
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
