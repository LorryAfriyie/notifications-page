export const NotificationList = () => {
  return (
    <div className="notification-list">
      <ul>
        {listOfNotifications.map((y) => {
          return (
            <li key={y.personId}>
              <img src={y.image} alt="" />
              <strong>{y.name + " "}</strong>
              {y.note_msg + " " + y.post}
              <br />
              {y.timestamp}

              {privateMessage.map((x) => {
                return (
                  <>
                    {x.personId === y.personId ? (
                      <p className="private-message">{x.message}</p>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const listOfNotifications = [
  {
    personId: 1,
    name: "Mark Webber",
    image: "/images/avatar-mark-webber.webp",
    note_msg: "reacted to your recent post",
    post: "My first tournament today!",
    timestamp: "1m ago",
    msg: 0,
  },
  {
    personId: 2,
    name: "Angela Gray",
    image: "/images/avatar-angela-gray.webp",
    note_msg: "followed you",
    post: "",
    timestamp: "5m ago",
    msg: 0,
  },
  {
    personId: 3,
    name: "Jacob Thompson",
    image: "/images/avatar-jacob-thompson.webp",
    note_msg: "has joined your group",
    post: "Chess Club",
    timestamp: "1 day ago",
    msg: 0,
  },
  {
    personId: 4,
    name: "Rizky Hasanuddin",
    image: "/images/avatar-rizky-hasanuddin.webp",
    note_msg: "sent you a private message",
    post: "",
    timestamp: "5 days ago",
    msg: 1,
  },
  {
    personId: 5,
    name: "Kimberly Smith",
    image: "/images/avatar-kimberly-smith.webp",
    note_msg: "commented on your picture",
    post: "",
    timestamp: "1 week ago",
    msg: 0,
  },
  {
    personId: 6,
    name: "Nathan Peterson",
    image: "/images/avatar-nathan-peterson.webp",
    note_msg: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    timestamp: "2 weeks ago",
    msg: 0,
  },
  {
    personId: 7,
    name: "Anna Kim",
    image: "/images/avatar-anna-kim.webp",
    note_msg: "left the group",
    post: "Chess Club",
    timestamp: "2 weeks ago",
    msg: 0,
  },
];

const privateMessage = [
  {
    msgId: 1,
    personId: 4,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots  of fun and improving my game.",
  },
];