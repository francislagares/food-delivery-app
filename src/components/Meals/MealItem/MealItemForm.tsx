import React from 'react';
import classes from './MealItemForm.module.css';
import Input from 'components/UI/Input';

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
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
      <button type='button'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
