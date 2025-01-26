import { useReducer } from 'react';

const INITIAL_VALUE = {
  user: '',
  text: '',
  rating: 0,
};

const SET_USER_ACTION = 'SET_USER';
const SET_TEXT_ACTION = 'SET_TEXT';
const SET_DECREMENT_RATING_ACTION = 'SET_DECREMENT_RATING';
const SET_INCREMENT_RATING_ACTION = 'SET_INCREMENT_RATING';
const SET_CLEAR_FORM_ACTION = 'SET_CLEAR_FORM';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER_ACTION:
      return {
        ...state,
        user: payload,
      };
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };
    case SET_DECREMENT_RATING_ACTION:
      return {
        ...state,
        rating: state.rating === 0 ? 0 : state.rating - 1,
      };
    case SET_INCREMENT_RATING_ACTION:
      return {
        ...state,
        rating: state.rating === 5 ? 5 : state.rating + 1,
      };
    case SET_CLEAR_FORM_ACTION:
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setUser = (value) => dispatch({ type: 'SET_USER', payload: value });
  const setText = (value) => dispatch({ type: 'SET_TEXT', payload: value });
  const setIncrementRating = (rating) =>
    dispatch({ type: 'SET_INCREMENT_RATING', rating });
  const setDecrementRating = (rating) =>
    dispatch({ type: 'SET_DECREMENT_RATING', rating });
  const setClearForm = () => dispatch({ type: 'SET_CLEAR_FORM' });

  return {
    form,
    setClearForm,
    setDecrementRating,
    setIncrementRating,
    setText,
    setUser,
  };
};
