import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from 'components/UI/Input';

interface Props {
  onAddToCart: (amount: number) => void;
}

const MealItemForm = ({ onAddToCart }: Props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: Submit) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;

    const enteredAmountNumber = Number(enteredAmount);

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        inputLabel='Amount'
        inputProps={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
