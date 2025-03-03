import { useParams } from 'react-router';
import { getDishById } from '../components/redux/entities/dishes/get-dish-by-id';
import { useRequest } from '../components/redux/entities/hooks/use-request';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../components/redux/constants';
import { DishContainer } from '../components/dishContainer/DishContainer';

export const DishPage = () => {
  const { dishId } = useParams();

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return '...loading';
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error';
  }

  return <DishContainer dishId={dishId} />;
};
