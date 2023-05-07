import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  const { data } = await axios.get(`${baseURL}/all`);
  return data;
};

const getCountry = async (name) => {
  const { data } = await axios.get(`${baseURL}/name/${name}?fullText=true`);
  return data[0];
};

const getCountryByCode = async (name) => {
  const { data } = await axios.get(`${baseURL}/alpha?codes=${name}`);
  return data[0];
};

const getCountriesByRegion = async (region) => {
  const { data } = await axios.get(`${baseURL}/region/${region}`);
  return data;
};

export { getAllCountries, getCountry, getCountryByCode, getCountriesByRegion };
