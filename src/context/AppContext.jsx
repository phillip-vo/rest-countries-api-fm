import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        countryName,
        setCountryName,
        region,
        setRegion,
        isRegionOpen,
        setIsRegionOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
