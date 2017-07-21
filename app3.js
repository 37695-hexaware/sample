/*
 HTTP Cloud Function.

 @param {Object} req Cloud Function request context.
 @param {Object} res Cloud Function response context.
*/
/*
exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working


res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};

-----
*/

'use strict';
var apiai = require('apiai');

var appai = apiai("baf498c6d40a4a70b54ef80debdcbc33");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};

console.log("in api.ai ");


   app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));
      if(req.body.result.parameters.location1){
        var resagent="Sure, will check the details  from " + req.body.result.parameters.location+ " to "+
        req.body.result.parameters.location1+
        "   for "+ req.body.result.parameters.date +"  .....";
      }else{
   var resagent="Alright, will check for tkts to " + req.body.result.parameters.location+
   "   for"+ req.body.result.parameters.date +"   How would you like to travel?by flight,train or bus.....";
}
      return res.json({
        speech:resagent,
        displayText: resagent,
        source:'hello ticket book'
      });

});
app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});



