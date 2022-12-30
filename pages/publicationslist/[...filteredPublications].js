// 2 slashes /allProducts/xyz/123

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFilteredPublications } from "../../helpers/firebaseData-helper";
import { onFindPublication } from "../../helpers/general-helper";

import FilterYearMonth from "../../components/layout-units/FilterYearMonth";
import useNotification from "../../contexts/notifications-context";
import PublicationsList from "../../components/publications/PublicationsList";
import Head from "next/head";
import ButtonAll from "../../components/layout-units/ButtonAll";
import PublicationsCard from "../../components/publications/PublicationsCard";

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
    isNaN(selectedYear) ||
    isNaN(selectedMonth) ||
    selectedYear < 2015 ||
    selectedMonth > 2025 ||
    selectedMonth < 1 ||
    selectedMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }
  const filteredPublications = await getFilteredPublications({
    selectedYear,
    selectedMonth,
  });
  // check if products exist with the selected date in the filter
  // getFilteredPublications will filter the array with the selected year and month
  // that returns the filtered array we will expose below with props to be called / used somewhere else

  return {
    props: {
      filteredPublications: filteredPublications,
      selectedDate: { selectedYear, selectedMonth },
    },
  };
}

function ProductsFilteredPage(props) {
  const { errorNotification } = useNotification();

  const { filteredPublications, selectedDate, hasError } = props;
  // console.log(filteredPublications);
  // console.log(selectedDate);
  const humanReadableDate = new Date(
    selectedDate.selectedYear,
    selectedDate.selectedMonth - 1
  ).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

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
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  // check validity of filter
  // hasError comes from getServerSideProps so the validity comes from there↑
  if (hasError) {
    return (
      <Fragment>
        {pageHead}
        <FilterYearMonth />
        <p>"Invalid filter. Try again!"</p>
      </Fragment>
    );
  }

  // Check if there are no publications for the selected year and month
  if (!filteredPublications || filteredPublications.length === 0) {
    return (
      <Fragment>
        {pageHead}
        <FilterYearMonth />
        <p>{`No publications were found for:  ${humanReadableDate}`}</p>
      </Fragment>
    );
  }

  // for the ProductResultsTitle. new Date() expects month index starting from 0, not from 1
  // Real months values range 1~12 but "new Date" months range 0~11.
  // substracting 1 is necessary

  const filteredPubCards = filteredPublications.map((story) => (
    <PublicationsCard
      id={story.id}
      title={story.title}
      date={story.date}
      text={story.text}
      photo={story.photo}
    />
  ));

  return (
    <div>
      {pageHead}
      <section>
        <h1>Events in </h1>
        <ButtonAll href="/publicationslist" text={"Show all events"} />
      </section>
      {humanReadableDate}
      <FilterYearMonth />
      <PublicationsList>{filteredPubCards}</PublicationsList>
    </div>
  );
}

export default ProductsFilteredPage;
