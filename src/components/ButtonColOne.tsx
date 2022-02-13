import { FC } from 'react';

type Props = {
  btnType?: string;
};

const ButtonColOne: FC<Props> = ({ btnType }) => {
  return (
    <div className="button-wrapper--xl">
      <button className={`button button${btnType ? '--' + btnType : ''}`}>
        <div className="buttons-text">Button</div>
      </button>

      <button className={`button button-light${btnType ? '--' + btnType : ''}`}>
        <div className="buttons-text">Button</div>
      </button>

      <button className={`button button-white${btnType ? '--' + btnType : ''}`}>
        <div className="buttons-text">Button</div>
      </button>
      <button
        className={`button button-white-dashed${btnType ? '--' + btnType : ''}`}
      >
        <div className="buttons-text">Button</div>
      </button>
    </div>
  );
};

export default ButtonColOne;
