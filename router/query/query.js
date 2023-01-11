const express = require("express");
const router = express.Router();


module.exports = router;

router.get("/chocolate", function (req, res) {
  let searchQuery = req.query.amount;
  res.send(`Mm chocolate ${searchQuery}`);
});

router.get("/", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});

router.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
