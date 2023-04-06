// --------------------------------------------
// ----------- Fetch Featured Articles from FireBase
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
export async function getArticleByID(id) {
  const allArticlesArr = await getFeaturedArticles();
  return allArticlesArr.find((article) => article.id === id);
}

// export async function getFeaturedProducts() {
//   const allFeaturedArt = await getFeaturedArticles();
//   console.log(allFeaturedArt);
//   return allFeaturedArt.filter((product) => product.featured);
// }

// --------------------------------------------
// ----------- Fetch User Stories from FireBase
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
export async function getStoryID(id) {
  const allStoriesArr = await getUserStories();
  return allStoriesArr.find((story) => story.id === id);
}

// --------------------------------------------
// ----------- FILTER Publications by selectedYear and selectedMonth
export async function getFilteredPublications({ selectedYear, selectedMonth }) {
  const articlesArr = await getFeaturedArticles();
  const storiesArr = await getUserStories();

  let filteredPub = [];
  articlesArr
    .map((art) => {
      const year = +art.date.toString().slice(0, 4);
      const month = +art.date.toString().substring(4, 6);
      const key = art.id;
      // console.log(year, month);
      return { year, month, ...art, key };
    })
    .filter((art) => {
      // console.log(art);
      if (art.year === selectedYear && art.month === selectedMonth) {
        filteredPub.push(art);
      } else if (art.year === selectedYear) {
        filteredPub.push(art);
      }
    });
  storiesArr
    .map((sto) => {
      const year = +sto.date.toString().slice(0, 4);
      const month = +sto.date.toString().substring(4, 6);
      const key = sto.id;
      // console.log(year, month);
      return { year, month, ...sto, key };
    })
    .filter((sto) => {
      // console.log(sto);
      if (sto.year === selectedYear && sto.month === selectedMonth) {
        filteredPub.push(sto);
      } else if (sto.year === selectedYear) {
        filteredPub.push(sto);
      }
    });
  // let filteredPub = [filteredArticles, filteredStories];

  return filteredPub;
}

export async function getProfessionals() {
  const response = await fetch(
    "https://project-healthrecords-default-rtdb.asia-southeast1.firebasedatabase.app/professionals.json"
  );

  // Always input .json at the end of the url
  if (!response.ok) {
    throw new Error("Something is not right");
  }

  const Professionals = await response.json();
  // console.log(Professionals);

  const allProfessionalsArr = [];
  Object.keys(Professionals).forEach((key) => {
    // console.log(key); // printing all key of objects on first level
    // console.log(Professionals[key]); // printing all objects on first level
    if (typeof Professionals[key] === "object" && Professionals[key] !== null) {
      allProfessionalsArr.push({
        id: key,
        ...Professionals[key],
        type: "professionals",
      });
    }
  });
  // console.log(allProfessionalsArr);
  return allProfessionalsArr;
}

export async function getFacilities() {
  const response = await fetch(
    "https://project-healthrecords-default-rtdb.asia-southeast1.firebasedatabase.app/facilities.json"
  );

  // Always input .json at the end of the url
  if (!response.ok) {
    throw new Error("Something is not right");
  }

  const Facilities = await response.json();
  // console.log(Facilities);

  const allFacilitiesArr = [];
  Object.keys(Facilities).forEach((key) => {
    // console.log(key); // printing all key of objects on first level
    // console.log(Facilities[key]); // printing all objects on first level
    if (typeof Facilities[key] === "object" && Facilities[key] !== null) {
      allFacilitiesArr.push({
        id: key,
        ...Facilities[key],
        type: "facilities",
      });
    }
  });
  console.log(allFacilitiesArr.id);
  return allFacilitiesArr;
}

// --------------------------------------------
// ----------- FILTER Specialists and Facilities by speciality or type
export async function getFilteredSpecialists({
  selectedSpecialist,
  selectedFacility,
}) {
  const professionalsArr = await getProfessionals();
  const facilitiesArr = await getFacilities();

  let filteredSpecialists = [];

  filteredSpecialists.push(...professionalsArr.filter((obj) => {
    if (selectedSpecialist && selectedFacility) {
      return obj.speciality === selectedSpecialist && obj.type === selectedFacility;
    } else if (selectedSpecialist) {
      return obj.speciality === selectedSpecialist;
    }
  }));
  
  filteredSpecialists.push(...facilitiesArr.filter((obj) => {
    if (selectedSpecialist && selectedFacility) {
      return obj.speciality.includes(selectedSpecialist) && obj.type === selectedFacility;
    } else if (selectedFacility) {
      return obj.speciality.includes(selectedSpecialist);
    }
  }));

  console.log(filteredSpecialists)
  return filteredSpecialists;
}
