import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCountry, getCountryByCode } from "../api/restCountriesAPI";
import {
  checkLangauges,
  ciocCode,
  getFirstKey,
} from "../utils/GlobalFunctions";

const Country = () => {
  const { isDarkMode } = useContext(AppContext);
  const navigate = useNavigate();
  const { country } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["country", country],
    () => getCountry(country)
  );

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>Error! {error}</span>;
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-7 py-8 lg:py-16 ${
        isDarkMode
          ? "bg-very-dark-blue-dm text-white"
          : "bg-very-light-gray-lm text-very-dark-blue-lm"
      }`}
    >
      <div className="flex max-w-screen-2xl w-full mb-16 lg:px-12">
        <button
          className={`flex items-center justify-center gap-1 w-24 py-1 shadow-outline ${
            isDarkMode ? "bg-dark-blue-dm" : "bg-white"
          }`}
          onClick={() => navigate("/")}
        >
          <HiArrowNarrowLeft /> Back
        </button>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:gap-5 lg:px-12 max-w-screen-2xl">
        <div className="lg:w-1/2 lg:flex">
          <img src={data.flags.png} alt={data.flags.alt} />
        </div>
        <div className="lg:flex lg:flex-col lg:w-1/2 lg:mt-6">
          <h1 className="text-2xl font-bold mt-10 lg:mt-0">
            {data.name.common}
          </h1>
          <div className="lg:flex lg:justify-between">
            <div className="flex flex-col gap-3 mt-6">
              <span>
                <strong className="font-semibold">Native Name:</strong>{" "}
                {
                  data.name.nativeName[getFirstKey(data.name.nativeName)][
                    "official"
                  ]
                }
              </span>
              <span>
                <strong className="font-semibold">Population:</strong>{" "}
                {data.population}
              </span>
              <span>
                <strong className="font-semibold">Region:</strong> {data.region}
              </span>
              <span>
                <strong className="font-semibold">Sub Region:</strong>{" "}
                {data.subregion}
              </span>
              <span>
                <strong className="font-semibold">Capital:</strong>{" "}
                {data.capital}
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-8 lg:mt-6">
              <span>
                <strong className="font-semibold">Top Level Domain:</strong>{" "}
                {data.tld}
              </span>
              <span>
                <strong className="font-semibold">Currencies:</strong>{" "}
                {data.currencies[getFirstKey(data.currencies)]["name"]}
              </span>
              <div className="flex flex-wrap">
                <strong className="font-semibold pr-1">Languages:</strong>{" "}
                {checkLangauges(data.languages).map((item, index) => (
                  <span key={index} className="pr-2">
                    {index !== checkLangauges(data.languages).length - 1
                      ? item.value + ","
                      : item.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 lg:mb-6">
            <span className="font-semibold">Border Countries:</span>
            <div className="flex flex-wrap gap-2">
              {data.borders?.length
                ? data.borders.map((country, index) => (
                    <Link
                      to={`/country/${ciocCode[country].toLowerCase()}`}
                      state={{ country }}
                      key={index}
                    >
                      <button
                        key={index}
                        className={`w-full flex items-center justify-center gap-1 w-24 py-1 px-4 shadow-outline text-sm ${
                          isDarkMode ? "bg-dark-blue-dm" : "bg-white"
                        }`}
                      >
                        {ciocCode[country]}
                      </button>
                    </Link>
                  ))
                : "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
