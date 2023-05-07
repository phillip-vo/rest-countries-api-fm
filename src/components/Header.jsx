import React, { useContext } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);
  return (
    <div
      className={`border-b-4 border-black ${
        isDarkMode
          ? "bg-dark-blue-dm text-white border-opacity-25"
          : "bg-white text-very-dark-blue-lm border-opacity-10"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-8 px-12">
        <h1 className="font-extrabold">Where in the world?</h1>
        <button
          className="inline-flex items-center gap-3"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FaMoon /> : <FaRegMoon />}
          <span className="font-semibold">Dark Mode</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
