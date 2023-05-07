import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Card = ({ country }) => {
  const { isDarkMode } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div
      className={`max-w-sm mx-auto rounded-md overflow-hidden shadow-lg cursor-pointer  ${
        isDarkMode ? "bg-dark-blue-dm" : "bg-white"
      }`}
      onClick={() => {
        navigate(`/country/${country.name.common}`);
      }}
    >
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full h-56 2xl:h-48 object-cover"
      />
      <div
        className={`flex flex-col px-6 pt-4 pb-16 ${
          isDarkMode ? "text-white" : "text-very-dark-blue-lm"
        }`}
      >
        <span className="text-lg font-extrabold py-4">
          {country.name.common}
        </span>
        <span>
          <strong className="font-semibold">Population:</strong>{" "}
          {country.population}
        </span>
        <span>
          <strong className="font-semibold">Region:</strong> {country.region}
        </span>
        <span>
          <strong className="font-semibold">Capital:</strong> {country.capital}
        </span>
      </div>
    </div>
  );
};

export default Card;
