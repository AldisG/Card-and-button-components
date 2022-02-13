import { FC } from 'react';
import '../styles/SecondRowNotifications.scss';
type Props = {
  headline: string;
};
const somePhoto = 'https://picsum.photos/300/200';

const CardWithPic: FC<Props> = ({ headline }) => {
  return (
    <div className="NotificationCard SecondRowOfCards">
      <div className="cards-notifications__card-wrapper cards-with-pic">
        <div className="title-photo-wrapper">
          <img src={somePhoto} alt="somePhoto" />
        </div>

        <span className="notification__info-elements">
          <span className="notification__header">{headline}</span>
          <p className="notification__subline">
            Write an amazing description in this dedicated card section. Each
            word counts.
          </p>
        </span>
        <div className="input-wrapper">
          <button className="button" onClick={() => console.log('!')}>
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardWithPic;
