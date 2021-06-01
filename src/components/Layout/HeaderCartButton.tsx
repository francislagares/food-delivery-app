import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from 'components/Cart/CartIcon';

interface Props {
  btnType: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
}

const HeaderCartButton = ({ btnType, children }: Props) => {
  return (
    <button type={btnType} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
