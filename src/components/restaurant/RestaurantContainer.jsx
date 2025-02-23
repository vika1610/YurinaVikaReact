import { useSelector } from 'react-redux';
import { Restaurant } from './Restaurant';
import { selectRestaurantById } from '../redux/entities/restaurants/slice';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  return <Restaurant name={name} />;
};
