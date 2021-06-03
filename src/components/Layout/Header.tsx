import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderImage from './HeaderImage';
import mealsImage from 'assets/meals.jpg';

interface Props {
  onShowCart: () => void;
}

const Header = ({ onShowCart }: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Delivery</h1>
        <HeaderCartButton btnType='button' onClick={onShowCart}>
          Cart
        </HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <HeaderImage
          imgSrc={mealsImage}
          imgAlt='A table full of delicious food!'
        />
      </div>
    </>
  );
};

export default Header;
