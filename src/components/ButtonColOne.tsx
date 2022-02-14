import { FC } from 'react';

type Props = {
  text: string;
  btnType?: string;
  reversed?: boolean;
};

const ButtonColOne: FC<Props> = ({ text, btnType, reversed, children }) => {
  return (
    <div className="button-wrapper--xl">
      <button
        className={`button button-basic button${btnType ? '--' + btnType : ''}`}
        style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
      >
        {children}
        <div className="buttons-text">{text}</div>
      </button>

      <button
        className={`button button-light${btnType ? '--' + btnType : ''}`}
        style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
      >
        {children}
        <div className="buttons-text">{text}</div>
      </button>

      <button
        className={`button button-white${btnType ? '--' + btnType : ''}`}
        style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
      >
        {children}
        <div className="buttons-text">{text}</div>
      </button>
      <button
        className={`button button-white-dashed${btnType ? '--' + btnType : ''}`}
        style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
      >
        {children}
        <div className="buttons-text">{text}</div>
      </button>
    </div>
  );
};

export default ButtonColOne;
