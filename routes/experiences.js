var express = require('express');
var router = express.Router();

/* GET experiences page. */
router.get('/', function(req, res, next) {
  res.render('experiences', { title: 'Experiences of Cuong Luong - Product Manager' });
});

module.exports = router;
