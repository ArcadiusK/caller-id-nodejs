var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res) {

console.log("req.body: ",req.body);

var phoneNumber = req.body.arcPhone;

request.get(safe_arcadiusUrl+safe_arcadiusServiceId+'&username='+safe_arcadiusUsername+'&password='+safe_arcadiusPassword+'&elems=512&key1='+phoneNumber, function(err, response, body) {

    if (err) {
      console.error(err);
    } else if (response.statusCode != 200) {
      console.error("There was an error", err);
      console.log('error ', body);
    } else {
    // var data = JSON.parse(body);
     //console.log(util.inspect(data, { depth: null }));
     var i =0;
  //    data.forEach(function(data) {
    var lookedUpName = body.substring(body.indexOf("value")+6,21+body.indexOf("value"));
       console.log('response body: ', body);
       console.log('lookedUpName: ', lookedUpName);



var friendData = {
  name: lookedUpName,
};

res.send(friendData);
    //  });
 

    }
});

 
});



module.exports = router;
