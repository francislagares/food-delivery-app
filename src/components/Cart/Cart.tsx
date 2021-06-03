import React from 'react';
import classes from './Cart.module.css';
import Modal from 'components/UI/Modal';

interface Props {
  onHideCart: () => void;
}

const Cart = ({ onHideCart }: Props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      <div className={classes.total}>
        {cartItems}
        <span>Total Amount</span>
        <span>25.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
