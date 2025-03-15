export const getAllDishes = async () => {
  const result = await fetch('http://localhost:3001/api/dishes', {
    next: { tags: ['getAllDishes'] },
    cache: 'force-cache',
  });

  return result.json();
};
