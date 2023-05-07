import { useQuery } from "react-query";
import "./App.css";
import { Country, Home, Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import { getAllCountries, getCountriesByRegion } from "./api/restCountriesAPI";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export const useGetAllCountries = () => {
  return useQuery("allCountries", getAllCountries);
};

export const useGetCountriesByRegion = (region) => {
  const search = region !== "";
  return useQuery(
    ["countriesByRegion", region],
    () => getCountriesByRegion(region),
    {
      enabled: search,
    }
  );
};

function App() {
  const { region } = useContext(AppContext);
  const {
    data: allCountriesData,
    error,
    isError,
    isLoading,
  } = useGetAllCountries();

  const {
    data: regionData,
    error: regionError,
    isError: regionIsError,
    isLoading: regionIsLoading,
  } = useGetCountriesByRegion(region);

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (isError) {
    return <span>Error! {error}</span>;
  }

  if (regionIsLoading) {
    return <span>loading...</span>;
  }

  if (regionIsError) {
    return <span>Error! {regionError}</span>;
  }

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Home data={region === "" ? allCountriesData : regionData} />
          }
        />
        <Route path={`/country/:country`} element={<Country />} />
      </Routes>
    </Layout>
  );
}

export default App;
