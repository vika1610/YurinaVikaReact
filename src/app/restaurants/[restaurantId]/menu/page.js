import { Suspense } from 'react';
import { MenuList } from '../../../../components/MenuList/MenuList';

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback='...loading MenuList'>
      <MenuList restaurantId={restaurantId} />
    </Suspense>
  );
};

export default MenuPage;
