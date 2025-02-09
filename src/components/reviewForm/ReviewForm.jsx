import { useForm } from '../../hooks/use-form';
import { Button } from '../button/Button';
import { Counter } from '../counter/Counter';
import c from './styles.module.scss';

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
    <div className={c.container}>
      <div className={c.inputInner}>
        <span className={c.title}>Name</span>
        <input
          className={c.input}
          type='text'
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
      </div>
      <div className={c.inputInner}>
        <span className={c.title}>Text</span>
        <input
          className={c.input}
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className={c.inputInner}>
        <span className={c.title}>Rating</span>
        <Counter
          count={rating}
          onDecrement={setDecrementRating}
          onIncrement={setIncrementRating}
        />
      </div>
      <Button onClick={setClearForm} title={'Clear form'} />
    </div>
  );
};
