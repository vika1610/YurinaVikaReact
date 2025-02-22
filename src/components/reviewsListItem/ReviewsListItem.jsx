import { useSelector } from 'react-redux';
import c from './styles.module.scss';
import { selectUserById } from '../redux/entities/users/slice';

export const ReviewsListItem = ({ reviewsItem, userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const { name } = user || {};

  return (
    <li className={c.listItem}>
      <span>{name}: </span>
      {reviewsItem}
    </li>
  );
};
