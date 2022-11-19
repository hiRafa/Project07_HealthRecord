import React, { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  // for IDE completion later
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState({});

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function hideNotification() {
    setActiveNotification(null);
  }

  function showNotification(notificationData) {
    setActiveNotification(notificationData);
    // setActiveNotification({
    //   title: notificationData.title,
    //   message: notificationData.message,
    //   status: notificationData.status,
    // });
  }
  const pendingNotification = (message) =>
    showNotification({
      title: "Pending request",
      message: message,
      status: "pending",
    });
  const successfullNotification = (message) =>
    showNotification({
      title: "Sucess!",
      message: message,
      status: "success",
    });
  const errorNotification = (error) =>
    showNotification({
      title: "Error!",
      message: error  || "Something went wrong...",
      status: "error",
    });

  return (
    <NotificationContext.Provider
      value={{
        activeNotification,
        showNotification,
        hideNotification,
        pendingNotification,
        successfullNotification,
        errorNotification,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};
const useNotification = () => useContext(NotificationContext);
export default useNotification;
