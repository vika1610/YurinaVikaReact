export const RestaurantTab = ({ name, onClick, isActive }) => {
  if (!name) {
    return null;
  }

  return (
    <button disabled={isActive} onClick={onClick}>
      {name}
    </button>
  );
};
