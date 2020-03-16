var express = require('express');
var router = express.Router();

/* adminRouter */
router.get('/', function(req, res, next) {
  res.send('hello admin')
});

module.exports = router;
