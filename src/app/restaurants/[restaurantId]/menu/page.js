import { MenuList } from '../../../../components/MenuList/MenuList';

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <MenuList restaurantId={restaurantId} />;
};

export default MenuPage;
