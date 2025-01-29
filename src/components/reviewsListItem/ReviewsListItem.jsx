import c from './styles.module.scss';

export const ReviewsListItem = ({ reviewsItem }) => {
  const { text } = reviewsItem;

  return <li className={c.listItem}>{text}</li>;
};
