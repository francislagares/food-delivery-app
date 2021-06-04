import React, { forwardRef } from 'react';
import classes from './Input.module.css';

interface Props {
  inputLabel: string;
  inputProps: Record<string, string>;
  ref: React.RefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputLabel, inputProps }, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={inputProps.id}>{inputLabel}</label>
        <input ref={ref} {...inputProps} />
      </div>
    );
  },
);

export default Input;
