import React, { createContext, useContext, useEffect, useState } from "react";

const NotificationController = () => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

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
  const pendingNotification = (title, message) =>
    showNotification({
      title: title,
      message: message,
      status: "pending",
    });
  const successfullNotification = (title, message) =>
    showNotification({
      title: title,
      message: message,
      status: "success",
    });
  const errorNotification = (title, error) =>
    showNotification({
      title: title,
      message: error.message || "Something went wrong...",
      status: "error",
    });

  return {
    activeNotification,
    showNotification,
    hideNotification,
    pendingNotification,
    successfullNotification,
    errorNotification,
  };
};

const NotificationContext = createContext({
  // for IDE completion later
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
  pendingNotification: () => {},
  successfullNotification: () => {},
  errorNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
  <NotificationContext.Provider value={NotificationController()}>
    {children}
  </NotificationContext.Provider>;
};

export const useNotification = () => useContext(NotificationContext);
