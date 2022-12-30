import classes from "./Layout.module.css";
import useNotification from "../../contexts/notifications-context";

function Notification(props) {
  const { hideNotification } = useNotification();

  const { title, message, status } = props;

  // stablishing second classes depending on status
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  // stablishing classes group
  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
