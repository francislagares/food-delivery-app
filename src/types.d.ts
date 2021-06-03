interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

type CartState = {
  items: ICartItem[];
  totalAmount: number;
};

enum ActionType {
  IAddItem = 'ADD_ITEM',
  IRemoveItem = 'REMOVE_ITEM',
}

interface IAddItem {
  type: ActionType.IAddItem;
  item: ICartItem;
}

interface IRemoveItem {
  type: ActionType.IRemoveItem;
  id: ICartItem['id'];
}

type CartAction = IAddItem | IRemoveItem;

// Event Types
type Submit = React.FormEvent<HTMLFormElement>;
type ChangeInput = React.ChangeEvent<HTMLInputElement>;
