import { Counter } from '../counter/Counter';

export const MenuListItem = ({ menuItem }) => {
  const { name } = menuItem;

  return (
    <li>
      {name}
      <Counter />
    </li>
  );
};
