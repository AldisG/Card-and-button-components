import React from 'react';
import '../styles/ButtonContainerXL.scss';
import ButtonColOne from './ButtonColOne';
const ButtonContainerXL = () => {
  return (
    <div className="all-cards-container all-buttons-container all-buttons-container--XL">
      <ButtonColOne />
      <ButtonColOne btnType="round" />
    </div>
  );
};

export default ButtonContainerXL;
