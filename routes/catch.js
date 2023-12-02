var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? true : false;
  res.json({ success: result });
});

module.exports = router;
