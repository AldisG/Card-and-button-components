import { ChangeEvent, useState } from 'react';
import gdrive from '../img/gdrive.png';
import '../styles/GdriveCard.scss';
import OptionsButton from './OptionsButton';

const GdriveCard = () => {
  const [value, setvalue] = useState(25.5);
  const handleChange = (e: ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setvalue(Number(target.value));
  };
  return (
    <div className="NotificationCard SecondRowOfCards">
      <div className="cards-notifications__card-wrapper gdrive-card">
        <div className="gdrive-icons">
          <div className="flex-c-c gdrive-icon-wrapper">
            <img className="gdrive-icon" src={gdrive} alt="gdrive" />
          </div>
          <OptionsButton rotation={true} />
        </div>
        <span className="notification__info-elements">
          <span className="notification__header">Headline</span>
        </span>
        <label className="custom-progressbar">
          <span className="gb-plan-wrapper">
            <span className="notification__subline">{`${value.toFixed(
              1
            )} GB`}</span>
            <span className="notification__subline">50 GB</span>
          </span>
          <input
            type="range"
            step={0.5}
            value={value}
            onChange={handleChange}
          />
          <div className="new-progressbar"></div>
        </label>
      </div>
    </div>
  );
};

export default GdriveCard;
