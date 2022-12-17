export async function getFeaturedArticles() {
  const response = await fetch(
    "https://project-healthrecords-default-rtdb.asia-southeast1.firebasedatabase.app/featured.json"
  );

  // Always input .json at the end of the url
  if (!response.ok) {
    throw new Error("Something is not right");
  }

  const featuredArticles = await response.json();
  // console.log(featuredArticles);

  const allFeaturedArtArr = [];
  Object.keys(featuredArticles).forEach((key) => {
    // console.log(key); // printing all key of objects on first level
    // console.log(featuredArticles[key]); // printing all objects on first level
    if (
      typeof featuredArticles[key] === "object" &&
      featuredArticles[key] !== null
    ) {
      allFeaturedArtArr.push({
        id: key,
        ...featuredArticles[key],
      });
    }
  });
  // console.log(allFeaturedArtArr);
  return allFeaturedArtArr;
}

// export async function getFeaturedProducts() {
//   const allFeaturedArt = await getFeaturedArticles();
//   console.log(allFeaturedArt);
//   return allFeaturedArt.filter((product) => product.featured);
// }

// export async function getProductById(id) {
//   const allFeaturedArt = await getFeaturedArticles();
//   return allFeaturedArt.find((product) => product.id === id);
// }

// export async function getFilteredProducts(dateFilter) {
//   const { filteredYear, filteredMonth } = dateFilter;
//   const allFeaturedArt = await getFeaturedArticles();

//   let filteredEvents = allFeaturedArt.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === filteredYear &&
//       eventDate.getMonth() === filteredMonth - 1
//     );
//   });

//   return filteredEvents;
// }

export async function getUserStories() {
  const response = await fetch(
    "https://project-healthrecords-default-rtdb.asia-southeast1.firebasedatabase.app/stories.json"
  );

  // Always input .json at the end of the url
  if (!response.ok) {
    throw new Error("Something is not right");
  }

  const userStories = await response.json();
  // console.log(userStories);

  const allUserStoriesArr = [];
  Object.keys(userStories).forEach((key) => {
    // console.log(key); // printing all key of objects on first level
    // console.log(userStories[key]); // printing all objects on first level
    if (typeof userStories[key] === "object" && userStories[key] !== null) {
      allUserStoriesArr.push({
        id: key,
        ...userStories[key],
      });
    }
  });
  // console.log(allUserStoriesArr);
  return allUserStoriesArr;
}
