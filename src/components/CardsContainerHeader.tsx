import { FC } from 'react';
import '../styles/CardsContainerHeader.scss';

const symbols = ['❖', '👉', '🏝'];

type Props = {
  header: string;
  text: string;
  icon: number;
};

const CardsContainerHeader: FC<Props> = ({ header, text, icon }) => {
  return (
    <div className="card-header-container">
      <h1 className="card-header__title">{header}</h1>
      <hr className="card-header_hr" />
      <div className="card-header__small-header">
        <div className="icon">{symbols[icon]}</div>
        <div className="card-header__icon">{header}</div>
      </div>
      <div className="card-header__paragraph">{text}</div>
    </div>
  );
};

export default CardsContainerHeader;
