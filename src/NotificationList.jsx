import { listOfNotifications } from "./data/ListOfNotification";
import { imageComment } from "./data/ImageComment";
import { privateMessage } from "./data/PrivateMessage";
import { List } from "./UnorderedListItems";

export const NotificationList = () => {
  return (
    <div className="notification-list">
      <ul>
        {/* Iterate through the list of notifications */}
        {listOfNotifications.map((y) => {
          return y.new === 1 ? (
            // Mark notifications that are new with a highlighted bar and a red dot
            <div key={y.personId}>
              <List
                y={y}
                privateMessage={privateMessage}
                imageComment={imageComment}
                className={"new"}
                listStyle={"new"}
              />
            </div>
          ) : (
            // Display normal list of notification without the markings indicating that they are new
            <div key={y.personId}>
              <List
                y={y}
                privateMessage={privateMessage}
                imageComment={imageComment}
                className={"info"}
                listStyle={""}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
