var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/', function(req, res) {
  // res.render('friendsTemplate.html', friendData);
     console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy req.body: ",req.body);
  //res.send(friendData);


res.render('index', { abstract0: 'test', wordNumber: 'arcwordNumber'         });

});


module.exports = router;


