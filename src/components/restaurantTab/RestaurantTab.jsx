import c from './styles.module.scss';

export const RestaurantTab = ({ name, onClick, isActive }) => {
  if (!name) {
    return null;
  }

  return (
    <button className={c.tabBtn} disabled={isActive} onClick={onClick}>
      {name}
    </button>
  );
};
