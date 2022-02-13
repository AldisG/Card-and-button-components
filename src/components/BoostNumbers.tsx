import { FC } from 'react';
import smile from '../img/smile icon.png';

type Props = {
  header: string;
};

const BoostNumbers: FC<Props> = ({ header }) => {
  return (
    <div className="NotificationCard">
      <div className="notification-wrapper notification-wrapper--sum">
        <div className="notification__info-elements ">
          <span className="notification__header-small">{header}</span>
          <span className="notification__sum">000.000.00</span>
          <div className="booster-wrapper">
            <span className="booster-precent">+100%</span>
            <span className="booster-title">boost everything</span>
          </div>
        </div>
        <div className="flex-c-c notification__avatar-element smile-icon">
          <img src={smile} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default BoostNumbers;
