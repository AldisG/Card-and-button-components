import { FC } from 'react';

type Props = {
  headline: string;
};

const InputCard: FC<Props> = ({ headline }) => {
  return (
    <div className="NotificationCard SecondRowOfCards">
      <div className="cards-notifications__card-wrapper cards-notifications--input">
        <span className="notification__info-elements">
          <span className="notification__header">{headline}</span>
          <span className="notification__subline">
            Paste your text here and use it.
          </span>
        </span>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Input" />
          <button
            className="button input-field-button"
            onClick={() => console.log('!')}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
