/* eslint-disable react/prop-types */
export const List = ({
  y,
  privateMessage,
  imageComment,
  className,
  listStyle,
}) => {
  return (
    <li key={y.personId} className={listStyle}>
      {/* Image of people */}
      <div className="img">
        <img src={y.image} alt={y.image} />
      </div>

      {/* Notification text */}
      <div className="text">
        <div className={className}>
          {/* Name of the person notification is coming from */}
          <strong className="person-name">{y.name + " "}</strong>

          {/* Message of the notification */}
          <div className="message">{y.note_msg + " "}</div>

          {/* Check if a post has the title of Chess Club in order to add personalized style to the title */}
          {y.post.includes("Chess Club") ? (
            <strong className="chess">{y.post}</strong>
          ) : (
            <strong className="post">{y.post}</strong>
          )}
        </div>

        {/* Timestamp of how long the notifcation was received */}
        <div className="timestamp">{y.timestamp}</div>

        {/* Private message notification from a person */}
        {privateMessage.map((x) => {
          return (
            <div key={x.msgId} className="private-message-container">
              {x.personId === y.personId ? (
                // Private message received from a user
                <p className="private-message">{x.message}</p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      {/* Notification based on the content of what a person commented on */}
      <div className="comment-content">
        {imageComment.map((z) => {
          return z.personId === y.personId ? (
            <img src={z.img} alt={z.img} key={z.imgCommentId} />
          ) : (
            ""
          );
        })}
      </div>
    </li>
  );
};
