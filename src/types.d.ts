interface IMeals {
  id: string;
  name: string;
  description: string;
  price: number;
}

type Submit = React.FormEvent<HTMLFormElement>;
type ChangeInput = React.ChangeEvent<HTMLInputElement>;
