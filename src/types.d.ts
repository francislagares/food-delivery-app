interface IMeal {
  id?: string;
  name: string;
  description?: string;
  price: number;
}

interface IUserData {
  name: string | undefined;
  street: string | undefined;
  city: string | undefined;
  postalCode: string | undefined;
}

interface ICartItem extends IMeal {
  amount: number;
}

type CartState = {
  items: ICartItem[];
  totalAmount: number;
};

type CartAction = IAddItem | IRemoveItem;

interface IAddItem {
  type: 'ADD_ITEM';
  item: ICartItem;
}

interface IRemoveItem {
  type: 'REMOVE_ITEM';
  item?: ICartItem;
  id: ICartItem['id'];
}

// Event Types
type Submit = React.FormEvent<HTMLFormElement>;
type ChangeInput = React.ChangeEvent<HTMLInputElement>;
