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

export function onFindPublication(router, year, month) {
  // there has to be two slashes to access [...filteredTransaction]. which is a slug
  // if we only use one slash, then next will access [transactionID] instead
  if (router && year && month) {
    const fullPath = `/publicationslist/filter/${year}/${month}`;
    router.push(fullPath);
  } else if (router && year) {
    const fullPath = `/publicationslist/filter/${year}`;
    router.push(fullPath);
  }
}
// year month same order as the function in ProductFilter

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
