import c from './styles.module.scss';
import { useGetUsersQuery } from '../redux/services/api/api';

export const ReviewsListItem = ({ reviewsItem, userId }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === userId),
    }),
  });

  const { name } = data || {};

  return (
    <li className={c.listItem}>
      <span>{name}: </span>
      {reviewsItem}
    </li>
  );
};
