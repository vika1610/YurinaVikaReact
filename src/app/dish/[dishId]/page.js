import { Suspense } from 'react';
import { DishContainer } from '../../../components/dishContainer/DishContainer';

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return (
    <Suspense fallback='...loading Dish'>
      <DishContainer dishId={dishId} />
    </Suspense>
  );
};

export default DishPage;
