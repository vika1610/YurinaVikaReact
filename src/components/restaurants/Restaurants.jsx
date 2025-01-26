import { restaurants } from '../../../mock/mock';
import { Restaurant } from '../restaurant/Restaurant';
import { useState } from 'react';
import { RestaurantTab } from '../restaurantTab/RestaurantTab';

export const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const changeRestaurant = (restaurant) => {
    if (activeRestaurant === restaurant) return;
    setActiveRestaurant(restaurant);
  };

  return (
    <div>
      <div>
        {restaurants.map((restaurant) => (
          <RestaurantTab
            name={restaurant.name}
            key={restaurant.id}
            onClick={() => changeRestaurant(restaurant)}
            isActive={restaurant === activeRestaurant}
          />
        ))}
      </div>
      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
