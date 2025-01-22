export const RestaurantTab = ({ name, onClick }) => {
  if (!name) {
    return null;
  }

  return <button onClick={onClick}>{name}</button>;
};
