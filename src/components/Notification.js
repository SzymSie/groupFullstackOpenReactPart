const Notification = ({ message, className }) => {
  console.log({ message });
  if (message === null) {
    console.log("message in", message);
    return null;
  }

  return <div className={className}>{message}</div>;
};

export default Notification;
