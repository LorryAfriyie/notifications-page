import { listOfNotifications } from "./data/ListOfNotification";
import { imageComment } from "./data/ImageComment";
import { privateMessage } from "./data/PrivateMessage";
import { List } from "./UnorderedListItems";

export const NotificationList = () => {
  return (
    <div className="notification-list">
      <ul>
        {listOfNotifications.map((y) => {
          return y.new === 1 ? (
            <List
              y={y}
              privateMessage={privateMessage}
              imageComment={imageComment}
              className={"new"}
              listStyle={"new"}
            />
          ) : (
            <List
              y={y}
              privateMessage={privateMessage}
              imageComment={imageComment}
              className={"info"}
              listStyle={""}
            />
          );
        })}
      </ul>
    </div>
  );
};
