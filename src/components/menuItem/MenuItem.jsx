import { Counter } from '../counter/Counter';

export const MenuItem = ({ menuItem }) => {
  const { name } = menuItem;

  return (
    <li>
      {name}
      <Counter />
    </li>
  );
};
