import { FC } from 'react';
import OptionsIcon from '../img/vertical.svg';

type Props = {
  rotation?: boolean;
};

const OptionsButton: FC<Props> = ({ rotation }) => {
  return (
    <div
      className={`flex-c-c notification__icon ${rotation ? 'rotate-90' : ''}`}
    >
      <img src={OptionsIcon} alt="Options Icon" />
    </div>
  );
};

export default OptionsButton;
