export const formatText300 = (text) => {
  return `${text.substring(0, 300)}...`;
};

export const formatDate = (date) => {
  const year = date.toString().slice(0, 4);
  const month = date.toString().substring(4, 6) - 1;
  const day = date.toString().substring(6, 8);

  return new Date(year, month, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export function onFindPublication(userouter, folderPath, filter1, filter2) {
  // there has to be two slashes to access [...filteredTransaction]. which is a slug
  // if we only use one slash, then next will access [transactionID] instead
  if (userouter && filter1 && filter2) {
    const fullPath = `/${folderPath}/filter/${filter1}/${filter2}`;
    userouter.push(fullPath);
  } else if (userouter && filter1) {
    const fullPath = `/${folderPath}/filter/${filter1}`;
    userouter.push(fullPath);
  }
}
// year filter2 same order as the function in ProductFilter

export const togglePrevCurrent = (setState) => {
  setState((prevState) => !prevState);
};

export const profileFormSubmitHandler = (
  data,
  successfullNotification,
  errorNotification
) => {
  fetch("/api/postUserDataFromForms", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return response.json().then((data) => {
        errorNotification(data.message || "Something went wrong!");
      });
    })
    .then(
      // (data) => console.log(data),
      successfullNotification("Success!", "Your comment was registered!")
    )
    .catch((error) => errorNotification("Error!", error));
};

export const fetchUserData = (currentUserEmail, setDataFetched) => {
  if (currentUserEmail) {
    fetch(`/api/userData/${currentUserEmail}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // then extracting the data, the data was stored as { userData: userData}
        // set the data to a local component state#
        // console.log(data.userData);
        setDataFetched({ ...data.userData });
        // setFetchingData(false);
      });
  }
};
