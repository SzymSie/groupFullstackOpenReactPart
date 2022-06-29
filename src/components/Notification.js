const Notification = ({ message }) => {
  console.log({ message });
  if (message === null) {
    console.log("message in", message);
    return null;
  }

  return <div className="successful">{message}</div>;
};

export default Notification;
