var express = require('express');
var colors = require('colors');
var router = express.Router();
const request = require('request');
const appRoot = require('app-root-path');

var vision_api_descripe_url = "https://api.projectoxford.ai/vision/v1.0/describe?maxCandidates=1&maxCandidates=1"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(appRoot + '/views/index.html')
});

router.post('/descripe', function (req, res, next) {

  var key = req.body.key
  console.log("request with key=".green.bold + key);

  var imageUrl = req.body.url;

  var options = {
    uri: vision_api_descripe_url,
    method: 'POST',
    json: {
      url: imageUrl
    },
    headers: {
      'content-type': "application/json",
      'Ocp-Apim-Subscription-Key': key
    }
  };

  request(options, function (error, response, body) {
    // if (!error && response.statusCode == 200) {
      res.send(body)
    // }
  });
});

var describe = function(imageUrl, callback) {
    var key = req.body.key
    console.log("request with key=".green.bold + key);

    var options = {
        uri: vision_api_descripe_url,
        method: 'POST',
        json: {
            url: imageUrl
        },
        headers: {
            'content-type': "application/json",
            'Ocp-Apim-Subscription-Key': key
        }
    };

    request(options, function (error, response, body) {
        // if (!error && response.statusCode == 200) {
        callback(body);
        // }
    });    
};

router.get('/analyze', function(req, res, next) {
    var photos = fs.readdirSync('./public/user-photos').filter(function(filename) {
        return filename.endsWith('.jpg');
    });
    debugger;
    for (var i = 0; i < photos.length; i ++) {
        describe('http://52.163.59.105:8080/user-photos/' + photos[i], function(body) {

        });
    }
});

module.exports = router;
