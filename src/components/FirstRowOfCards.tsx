import React from 'react';
import { notificationList } from '../util/usersData';
import BoostNumbers from './BoostNumbers';
import EmojiNotification from './EmojiNotification';
import NotificationCard from './NotificationCard';
const FirstRowOfCards = () => {
  return (
    <div>
      {' '}
      <div className="card-column-wrapper">
        <div className="cards-notifications__headline">
          <h6 className="cards-notifications__h6">Headline label</h6>
          <button className="text-button">See all</button>
        </div>
        <div className="cards-notifications__card-wrapper">
          {notificationList.map((item) => (
            <NotificationCard item={item} key={item.id} />
          ))}
        </div>
        <div className="cards-notifications__card-wrapper">
          <EmojiNotification header={notificationList[0].headline} />
        </div>
        <div className="cards-notifications__card-wrapper">
          <BoostNumbers header={notificationList[0].headline} />
        </div>
      </div>
    </div>
  );
};

export default FirstRowOfCards;
