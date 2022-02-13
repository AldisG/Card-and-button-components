import '../styles/ToggleButtonCard.scss';

const ToggleButtonCard = () => {
  return (
    <div className="NotificationCard SecondRowOfCards">
      <div className="cards-notifications__card-wrapper card-with-badges">
        <span className="notification__info-elements">
          <span className="notification__header">Headline</span>
          <span className="notification__subline">
            Write text here and switch everything.
          </span>
        </span>
        <label className="custom-checkmark">
          <input type="checkbox" />
          <div className="new-checkmark"></div>
        </label>
      </div>
    </div>
  );
};

export default ToggleButtonCard;
