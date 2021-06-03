import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from 'components/Cart/CartIcon';
import CartContext from 'context/cart-context';

interface Props {
  btnType: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
  onClick: () => void;
}

const HeaderCartButton = ({ btnType, children, onClick }: Props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button type={btnType} className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{children}</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
