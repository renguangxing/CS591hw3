const express = require('express');
const request = require('request');
const router = express.Router();

/* GET hw3 page. */
router.get('/', function(req, res, next) {
  const check = "https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22"
  const url = "http://api.openweathermap.org/data/2.5/weather?q=Boston&units=metric&appid=0bcf2784ebeb9f6b7232daebe88d9e64";
  request.get(check, (err, response, body) => {
    if (err) {
      return console.log(err);
    }
    //let temp_c = JSON.parse(body).main.temp;
    let temp_c = JSON.parse(body).list[0].main.temp;
    res.render('hw3', { temp: temp_c });
  });
});

module.exports = router;