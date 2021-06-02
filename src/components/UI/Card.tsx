import React from 'react';
import classes from './Card.module.css';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
