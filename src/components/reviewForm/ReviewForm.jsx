import { useForm } from '../../hooks/use-form';
import { Counter } from '../counter/Counter';

export const ReviewForm = () => {
  const {
    form,
    setUser,
    setText,
    setDecrementRating,
    setIncrementRating,
    setClearForm,
  } = useForm();
  const { user, text, rating } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          type='text'
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <Counter
          count={rating}
          onDecrement={setDecrementRating}
          onIncrement={setIncrementRating}
        />
      </div>
      <button onClick={setClearForm}>Clear form</button>
    </div>
  );
};
