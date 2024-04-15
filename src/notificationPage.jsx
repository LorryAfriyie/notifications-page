import { NotificationList } from "./NotificationList";

export const NotificationPage = () => {
  return (
    <div className="notification-page">
      {/* Card header that displays the amount of notifications through a badge and a mark all as read feature (Not working) */}
      <div className="card-header">
        <div className="badge">
          <h2>Notifications</h2>

          {/* Notification badge */}
          <div className="badge-notification">
            <strong>3</strong>
          </div>
        </div>

        {/* Mark all as read feature */}
        <div className="read">
          <a href="!#">Mark all as read</a>
        </div>
      </div>

      {/* Unordered notification list component */}
      <NotificationList />
    </div>
  );
};
