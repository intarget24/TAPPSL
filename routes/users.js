var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Invalid Request');
});

router.put('/register', function(req, res, next) {
  console.log(res);
  res.send('respond with a resource');
});

router.put('/login', function(req, res, next) {
    console.log(res);
    res.send('respond with a resource');
});


module.exports = router;
