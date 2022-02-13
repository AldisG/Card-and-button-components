import { FC } from 'react';
import { NotificationCardType } from '../store/types';
import '../styles/NotificationCard.scss';
import OptionsIcon from '../img/vertical.svg';
import OptionsButton from './OptionsButton';

type Props = {
  item: NotificationCardType;
};

const NotificationCard: FC<Props> = ({ item }) => {
  const { headline, subline, link, userName } = item;
  const initialsOfusername = userName
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
  return (
    <div className="NotificationCard">
      <div className="notification-wrapper">
        <div className="flex-c-c notification__avatar-element">
          {link ? <img src={link} alt="user" /> : initialsOfusername}
        </div>
        <span className="notification__info-elements">
          <span className="notification__header">{headline}</span>
          <span className="notification__subline">{subline}</span>
        </span>
      </div>
      <div className="notification__icon-wrapper">
        <OptionsButton />
      </div>
    </div>
  );
};

export default NotificationCard;
