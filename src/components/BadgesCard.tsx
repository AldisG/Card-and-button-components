import { FC } from 'react';
type Props = {
  headline: string;
};
const BadgesCard: FC<Props> = ({ headline }) => {
  return (
    <div className="NotificationCard SecondRowOfCards">
      <div className="cards-notifications__card-wrapper card-with-badges">
        <span className="notification__info-elements">
          <span className="notification__header">{headline}</span>
          <span className="notification__subline">Text label</span>
        </span>
        <div className="input-wrapper badge-button-wrapper">
          <div className="badge badge--disabled">Badge</div>
          <div className="badge">Badge</div>
        </div>
        <p className="badge__subline">
          Write an amazing description in this dedicated card section. Each word
          counts.
        </p>
      </div>
    </div>
  );
};

export default BadgesCard;
