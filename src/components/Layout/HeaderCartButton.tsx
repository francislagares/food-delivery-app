import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from 'components/Cart/CartIcon';

interface Props {
  btnType: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
  onClick: () => void;
}

const HeaderCartButton = ({ btnType, children, onClick }: Props) => {
  return (
    <button type={btnType} className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
