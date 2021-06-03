/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

interface IContext {
  items: ICartItem[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<IContext>({
  items: [],
  totalAmount: 0,
  addItem: (item: ICartItem) => {},
  removeItem: (id: string) => {},
});

export default CartContext;
