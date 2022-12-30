export const formatText300 = (text) => {
  return `${text.substring(0, 300)}...`;
};

export const formatDate = (date) => {
  const year = date.toString().slice(0, 4);
  const month = date.toString().substring(4, 6) - 1;
  const day = date.toString().substring(6, 8);

  return new Date(year, month, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  });
};

export function onFindPublication(router, year, month) {
  // there has to be two slashes to access [...filteredTransaction]. which is a slug
  // if we only use one slash, then next will access [transactionID] instead
  const fullPath = `/publicationslist/${year}/${month}`;
  router.push(fullPath);
}
// year month same order as the function in ProductFilter
