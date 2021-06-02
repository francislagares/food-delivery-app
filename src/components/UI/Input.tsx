import React from 'react';
import classes from './Input.module.css';

interface Props {
  inputLabel: string;
  inputProps: Record<string, string>;
}

const Input = ({ inputLabel, inputProps }: Props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={inputProps.id}>{inputLabel}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
