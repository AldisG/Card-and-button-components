import React from 'react';
import '../styles/ButtonContainerXL.scss';
import ArrowIcon from './ArrowIcon';
import BubbleIcon from './BubbleIcon';
import ButtonColOne from './ButtonColOne';
const ButtonContainerXL = () => {
  return (
    <div className="all-cards-container all-buttons-container all-buttons-container--XL">
      <ButtonColOne text="Button" />
      <ButtonColOne text="Button" btnType="round" />
      <ButtonColOne text="Button">
        <BubbleIcon />
      </ButtonColOne>
      <ButtonColOne text="Button" btnType="round">
        <BubbleIcon />
      </ButtonColOne>
      <ButtonColOne text="Button" reversed={true}>
        <ArrowIcon />
      </ButtonColOne>
      <ButtonColOne text="Button" btnType="round" reversed={true}>
        <ArrowIcon />
      </ButtonColOne>
      <ButtonColOne text="+" />
      <ButtonColOne text="+" btnType="round" />
    </div>
  );
};

export default ButtonContainerXL;
