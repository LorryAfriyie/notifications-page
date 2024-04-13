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
      <div className="img">
        <img src={y.image} alt={y.image} />
      </div>

      <div className="text">
        <div className={className}>
          <strong className="person-name">{y.name + " "}</strong>

          <div className="message">{y.note_msg + " "}</div>

          {y.post.includes("Chess Club") ? (
            <strong className="chess">{y.post}</strong>
          ) : (
            <strong className="post">{y.post}</strong>
          )}
        </div>

        <div className="timestamp">{y.timestamp}</div>

        {privateMessage.map((x) => {
          return (
            <div key={x.msgId} className="private-message-container">
              {x.personId === y.personId ? (
                <p className="private-message">{x.message}</p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

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
