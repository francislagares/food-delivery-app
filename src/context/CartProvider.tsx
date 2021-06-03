/* eslint-disable @typescript-eslint/no-empty-function */
import CartContext from './cart-context';

const CartProvider: React.FC = ({ children }) => {
  const addItemToCartHandler = (item: ICartItem) => {};

  const removeItemFromCartHandler = (id: string) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
