import { useActionState, useRef } from 'react';
import { Button } from '../button/Button';
import c from './styles.module.scss';

export const ReviewForm = ({ submitFormAction }) => {
  const ratingRef = useRef();

  const [formState, submitAction] = useActionState(submitFormAction, {
    text: 'default text',
    rating: 5,
  });

  return (
    <form action={submitAction} className={c.container}>
      <div className={c.inputInner}>
        <label className={c.title} htmlFor='text'>
          Text
        </label>
        <input
          className={c.input}
          type='text'
          id='text'
          name='text'
          defaultValue={formState.text}
        />
      </div>

      {formState.errorMessage && <div>error</div>}

      <div className={c.inputInner}>
        <label className={c.title} htmlFor='rating'>
          Rating
        </label>
        <button
          type='button'
          id='decrement-button'
          onClick={() => ratingRef.current.stepDown()}
        >
          -
        </button>
        <input
          type='number'
          id='rating'
          name='rating'
          min={1}
          max={5}
          ref={ratingRef}
          defaultValue={formState.rating}
        />
        <button
          type='button'
          id='increment-button'
          onClick={() => ratingRef.current.stepUp()}
        >
          +
        </button>
      </div>
      <Button
        type='submit'
        formAction={() => submitAction(null)}
        title={'Clear form'}
      />
      <br />
      <Button type='submit' title={'Submit form'} />
    </form>
  );
};
