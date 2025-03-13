import { redirect } from 'next/navigation';

const RestaurantBasePage = async ({ params }) => {
  const { restaurantId } = await params;
  redirect(`/restaurants/${restaurantId}/menu`);
};

export default RestaurantBasePage;
