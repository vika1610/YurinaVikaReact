import { useParams } from 'react-router';
import { MenuList } from '../components/MenuList/MenuList';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <MenuList restaurantId={restaurantId} />;
};
