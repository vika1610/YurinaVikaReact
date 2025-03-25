import { getAllDishes } from '../../services/get-all-dishes';
import { CartContainer } from './CartContainer';

export const CartLayout = async () => {
  const dishes = await getAllDishes();
  return <CartContainer dishes={dishes} />;
};
