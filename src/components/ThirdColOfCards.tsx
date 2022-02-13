import React from 'react';
import { notificationList } from '../util/usersData';
import '../styles/SecondRowNotifications.scss';
import BadgesCard from './BadgesCard';
import '../styles/ThirdColOfCards.scss';
import ToggleButtonCard from './ToggleButtonCard';
import GdriveCard from './GdriveCard';

const ThirdColOfCards = () => {
  const { headline } = notificationList[0];
  return (
    <div>
      <div className="card-column-wrapper">
        <BadgesCard headline={headline} />
        <ToggleButtonCard />
        <GdriveCard />
      </div>
    </div>
  );
};

export default ThirdColOfCards;
