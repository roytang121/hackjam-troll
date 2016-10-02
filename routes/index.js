var express = require('express');
var router = express.Router();
const request = require('request');
const appRoot = require('app-root-path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(appRoot + '/views/index.html')
});

module.exports = router;
