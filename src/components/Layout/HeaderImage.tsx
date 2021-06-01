import React from 'react';

interface Props {
  imgSrc: string;
  imgAlt: string;
}

const HeaderImage = ({ imgSrc, imgAlt }: Props) => {
  return <img src={imgSrc} alt={imgAlt} />;
};

export default HeaderImage;
