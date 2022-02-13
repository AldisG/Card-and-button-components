import { FC } from 'react';
import OptionsIcon from '../img/vertical.svg';
import smile from '../img/smile.png';
import OptionsButton from './OptionsButton';
type Props = {
  header: string;
};

const EmojiNotification: FC<Props> = ({ header }) => {
  return (
    <div className="NotificationCard">
      <div className="notification-wrapper">
        <div className="flex-c-c notification__emoji">
          <img src={smile} alt="Smile Icon" />
        </div>
        <span className="notification__info-elements">
          <span className="notification__header">{header}</span>
        </span>
      </div>
      <div className="notification__icon-wrapper">
        <OptionsButton rotation={true} />
      </div>
    </div>
  );
};

export default EmojiNotification;
