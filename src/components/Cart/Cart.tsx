/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Modal from 'components/UI/Modal';
import CartContext from 'context/cart-context';

interface Props {
  onHideCart: () => void;
}

const Cart = ({ onHideCart }: Props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: ICartItem) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: IUserData) => {
    setIsSubmiting(true);
    const response = await fetch(
      'https://delivery-food-app-a41ac-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      },
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id!)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button-alt']} onClick={onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={onHideCart} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmitingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onHideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onHideCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
