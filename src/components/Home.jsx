import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Home = ({ data }) => {
  const [countries, setCountries] = useState([]);
  const {
    isDarkMode,
    countryName,
    setCountryName,
    region,
    setRegion,
    isRegionOpen,
    setIsRegionOpen,
  } = useContext(AppContext);

  useEffect(() => {
    setCountries(data);
  }, [data]);

  const handleRegionClick = (regionName) => {
    setRegion(regionName);
    setIsRegionOpen(false);
  };

  return (
    <div
      className={`text-white bg-very-dark-blue-dm py-12 2xl:pb-2xl ${
        !isDarkMode && "text-very-dark-blue-lm bg-very-light-gray-lm"
      }`}
    >
      <div className="flex flex-col gap-12 px-6 py-4 max-w-screen-2xl mx-auto md:flex-row md:justify-between md:px-11">
        <div
          className={`flex items-center gap-8 pl-8 py-4 rounded-md shadow-outline md:w-1/2 ${
            isDarkMode ? "bg-dark-blue-dm" : "bg-white"
          }`}
        >
          <FaSearch
            className={`${isDarkMode ? "text-white" : "text-dark-gray-lm"}`}
          />
          <input
            type="text"
            placeholder="Search for a country..."
            value={countryName}
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
            className={`w-full outline-none ${
              isDarkMode ? "bg-dark-blue-dm" : "bg-white text-very-dark-blue-lm"
            }`}
          />
        </div>
        <div className="relative w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/5">
          <button
            className={`flex items-center justify-between w-full px-6 py-4 rounded-md relative shadow-outline ${
              isDarkMode ? "bg-dark-blue-dm" : "bg-white text-dark-gray-lm"
            }`}
            onClick={() => setIsRegionOpen(!isRegionOpen)}
          >
            {region != "" ? region : "Filter by Region"} <FiChevronDown />
          </button>
          {isRegionOpen && (
            <div
              className={`absolute mt-1 rounded-md py-4 px-6 flex flex-col w-full leading-7 ${
                isDarkMode ? "bg-dark-blue-dm" : "bg-white text-dark-gray-lm"
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("Africa")}
              >
                Africa
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("America")}
              >
                America
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("Asia")}
              >
                Asia
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("Europe")}
              >
                Europe
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("Oceania")}
              >
                Oceania
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRegionClick("")}
              >
                Clear Search
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-10 px-12 flex flex-wrap justify-center lg:justify-between gap-12">
        {countries
          .filter((data) => {
            if (countryName === "") {
              return data;
            } else if (
              data.name.common.toLowerCase().includes(countryName.toLowerCase())
            ) {
              return data;
            }
            return null;
          })
          .map((country, index) => (
            <Link
              to={`/country/${country.name.common.toLowerCase()}`}
              state={{ country }}
              key={index}
              className="md:w-5/12 lg:w-3/12 xl:w-1/5 2xl:w-1/5 sm:w-full w-full"
            >
              <Card key={country.name.common} country={country} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
