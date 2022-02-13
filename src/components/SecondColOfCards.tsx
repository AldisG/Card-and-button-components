import { notificationList } from '../util/usersData';
import InputCard from './InputCard';
import CardWithPic from './CardWithPic';
import '../styles/SecondRowNotifications.scss';

const SecondColOfCards = () => {
  const { headline } = notificationList[0];
  return (
    <div>
      <div className="card-column-wrapper">
        <InputCard headline={headline} />
        <CardWithPic headline={headline} />
      </div>
    </div>
  );
};

export default SecondColOfCards;
