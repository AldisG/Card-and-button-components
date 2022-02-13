import React from 'react';
import CardsContainer from '../components/CardsContainer';
import CardsContainerHeader from '../components/CardsContainerHeader';

const info = {
  header: 'Components',
  text: 'Make them just like you want to!',
};

const Cards = () => {
  return (
    <div>
      <CardsContainerHeader header={info.header} text={info.text} icon={0} />
      <CardsContainer />
    </div>
  );
};

export default Cards;
