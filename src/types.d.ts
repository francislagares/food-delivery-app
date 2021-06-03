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

type Submit = React.FormEvent<HTMLFormElement>;
type ChangeInput = React.ChangeEvent<HTMLInputElement>;
