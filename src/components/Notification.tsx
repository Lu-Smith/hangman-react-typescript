import React from 'react';

interface showNotificationProps {
  showNotification: boolean;
}

const Notification = ({showNotification}:showNotificationProps) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification