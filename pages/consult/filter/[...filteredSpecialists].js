// 2 slashes /allProducts/xyz/123

import React, { Fragment } from "react";

import { getFilteredSpecialists } from "../../../helpers/firebaseData-helper";

import Head from "next/head";
import SectionTop from "../../../components/layout/SectionTop";
import SpecialistsCard from "../../../components/consult/SpecialistsCard";
import HeadCustom from "../../../components/layout/HeadCustom";

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.filteredSpecialists;
  // // filteredSpecialists is the folder name [...filteredSpecialists]
  // //params contains the last part of the url that was inserted with the filter
  const selectedSpecialist = filteredData[0];
  const selectedFacility = filteredData[1];
  // console.log(filteredData[0])
  // console.log(filteredData[1])

  // //check validity of filter
  if (!selectedSpecialist && !selectedFacility) {
    return {
      props: { hasError: true },
    };
  }
  if (selectedSpecialist && selectedFacility) {
    const filteredData = await getFilteredSpecialists({
      selectedSpecialist,
      selectedFacility,
    });
    if (filteredData)
      return {
        props: {
          filteredData,
          selectedSpecialist,
          selectedFacility,
        },
      };
  } else if (selectedSpecialist) {
    const filteredData = await getFilteredSpecialists({
      selectedSpecialist,
    });
    if (filteredData)
      return {
        props: {
          filteredData,
          selectedSpecialist,
        },
      };
  }
}

function ProductsFilteredPage(props) {
  const { filteredData, selectedSpecialist, selectedFacility, hasError } =
    props;

  let pageHead = (
    <HeadCustom
      title={"Health Specialists at your MyHealthJournal Webapp"}
      description={
        "Track and manage your health records with ease. Track also your family members health state."
      }
    />
  );

  // check if filteredSpecialists has been fetched
  if (!filteredData) {
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
        <SectionTop
          consultPage={true}
          message={"Invalid filter. Try again!"}
          selectedFilter={selectedSpecialist}
        />
      </Fragment>
    );
  }

  // Check if there are no publications for the selected year and month
  if (!filteredData || filteredData.length === 0) {
    return (
      <Fragment>
        {pageHead}
        <SectionTop
          consultPage={true}
          message={`No publications were found for: ${selectedSpecialist}`}
          selectedFilter={selectedSpecialist}
        />
      </Fragment>
    );
  }

  return (
    <div>
      {pageHead}
      <SectionTop
        message={`Specialists found for: ${selectedSpecialist}`}
        consultPage={true}
        selectedFilter={selectedSpecialist}
      />

      {filteredData &&
        filteredData.map((obj) => <SpecialistsCard facility={obj} />)}
    </div>
  );
}

export default ProductsFilteredPage;
