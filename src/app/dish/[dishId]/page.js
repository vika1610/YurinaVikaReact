import { DishContainer } from '../../../components/dishContainer/DishContainer';

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <DishContainer dishId={dishId} />;
};

export default DishPage;
