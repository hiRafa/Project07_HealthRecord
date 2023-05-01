// 2 slashes /allProducts/xyz/123

import React, { Fragment } from "react";

import { getFilteredPublications } from "../../../helpers/firebaseData-helper";

import FilterYearMonth from "../../../components/publications/FilterYearMonth";
import PublicationsList from "../../../components/publications/PublicationsList";
import Head from "next/head";
import PublicationsCard from "../../../components/publications/PublicationsCard";
import SectionTop from "../../../components/layout/SectionTop";
import SectionContainer from "../../../components/layout-units/SectionContainer";

export async function getServerSideProps(context) {
  const { params } = context;
  const filteredData = params.filteredPublications;
  // filteredPublications is the folder name [...filteredPublications]
  //params contains the last part of the url that was inserted with the filter

  const selectedYear = +filteredData[0];
  const selectedMonth = +filteredData[1];
  //  converting the filteredData to number with + sign.
  // And splitting the year and month

  //check validity of filter
  if (
    !selectedYear ||
    (!selectedYear && !selectedMonth) ||
    isNaN(selectedYear) ||
    selectedYear < 2017 ||
    selectedYear > 2025
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }
  if (selectedYear && selectedMonth) {
    const filteredPublications = await getFilteredPublications({
      selectedYear,
      selectedMonth,
    });
    return {
      props: {
        filteredPublications: filteredPublications,
        selectedDate: { selectedYear, selectedMonth },
      },
    };
  } else if (selectedYear && !selectedMonth) {
    const filteredPublications = await getFilteredPublications({
      selectedYear,
    });
    return {
      props: {
        filteredPublications: filteredPublications,
        selectedDate: { selectedYear },
      },
    };
  }
  // check if products exist with the selected date in the filter
  // getFilteredPublications will filter the array with the selected year and month
  // that returns the filtered array we will expose below with props
  // different props will be returned for different conditions using the same filter
  // only for years or for years and months.
}

function ProductsFilteredPage(props) {
  const { filteredPublications, selectedDate, hasError } = props;
  // console.log(filteredPublications);
  // console.log(selectedDate);
  let filterDateFormated;
  if (selectedDate.selectedYear && selectedDate.selectedMonth) {
    filterDateFormated = new Date(
      selectedDate.selectedYear,
      selectedDate.selectedMonth - 1
    ).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } else if (selectedDate.selectedYear) {
    filterDateFormated = selectedDate.selectedYear;
  }

  let pageHead = (
    <Head>
      <title>Ori Craft & Hobbies - Filtered Products</title>
      <meta name="description" content={"description"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  // check if filteredPublications has been fetched
  if (!filteredPublications) {
    return (
      <Fragment>
        {pageHead}
        <SectionContainer className="loading">
          <p className="center">Loading...</p>
        </SectionContainer>
      </Fragment>
    );
  }

  // check validity of filter
  // hasError comes from getServerSideProps so the validity comes from there↑
  if (hasError) {
    return (
      <Fragment>
        {pageHead}
        <SectionTop
          publicationPage={true}
          message={"Invalid filter. Try again!"}
          selectedDate={filterDateFormated}
        />
      </Fragment>
    );
  }

  // Check if there are no publications for the selected year and month
  if (!filteredPublications || filteredPublications.length === 0) {
    return (
      <Fragment>
        {pageHead}
        <SectionTop
          publicationPage={true}
          message={`No publications were found for:  ${filterDateFormated}`}
          selectedDate={filterDateFormated}
        />
      </Fragment>
    );
  }

  // for the ProductResultsTitle. new Date() expects month index starting from 0, not from 1
  // Real months values range 1~12 but "new Date" months range 0~11.
  // substracting 1 is necessary

  return (
    <div>
      {pageHead}
      <SectionTop
        publicationPage={true}
        message={`Publications found for ${filterDateFormated}`}
        selectedDate={filterDateFormated}
      />

      <PublicationsList>
        {filteredPublications.map((story) => (
          <PublicationsCard
            id={story.id}
            title={story.title}
            date={story.date}
            text={story.text}
            photo={story.photo}
          />
        ))}
      </PublicationsList>
    </div>
  );
}

export default ProductsFilteredPage;
