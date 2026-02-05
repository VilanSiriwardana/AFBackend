const express = require("express");
const router = express.Router();
const {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
  getCountryByCode,
} = require("../controllers/countryController");

router.get("/all", getAllCountries);
router.get("/name/:name", getCountryByName);
router.get("/region/:region", getCountriesByRegion);
router.get("/alpha/:code", getCountryByCode);

module.exports = router;
