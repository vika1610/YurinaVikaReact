import { DishCounter } from '../dishCounter/DishCounter';

export const MenuListItem = ({ menuItem }) => {
  const { name } = menuItem;

  return (
    <li>
      {name}
      <DishCounter min={0} max={5} />
    </li>
  );
};
