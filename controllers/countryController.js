// Using global fetch (Node.js 18+)

// Base URL for the public REST Countries API
const BASE_URL = "https://restcountries.com/v3.1";

// @desc    Get all countries
// @route   GET /api/v1/all
// @access  Public
const getAllCountries = async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch countries", error: error.message });
  }
};

// @desc    Get country by name
// @route   GET /api/v1/name/:name
// @access  Public
const getCountryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(`${BASE_URL}/name/${name}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch country details", error: error.message });
  }
};

// @desc    Get countries by region
// @route   GET /api/v1/region/:region
// @access  Public
const getCountriesByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const response = await fetch(`${BASE_URL}/region/${region}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch countries by region", error: error.message });
  }
};

// @desc    Get country by code
// @route   GET /api/v1/alpha/:code
// @access  Public
const getCountryByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch country by code", error: error.message });
  }
};

module.exports = {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
  getCountryByCode,
};
