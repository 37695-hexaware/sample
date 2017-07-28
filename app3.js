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

var appai = apiai("4159f90a3049494889fa9424b1ad4c7a");

var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var options = {
    sessionId: '567yh8'
};

console.log("in___ api.ai ");


   app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));
       var spec1= req.body.result.fulfillment.messages.speech;
      console.log(" console output : speech "+spec1);
         var color = req.body.result.parameters.color;
      console.log("color is ***+++++++++++++++++++++++++++++"+color);
      var num_val=req.body.result.parameters.unit_length;
      
      if(req.body.result.parameters.location1){
        var resagent="Sure, will check the details  from " + req.body.result.parameters.location1+ " to "+
        req.body.result.parameters.location1+
        "   for "+ req.body.result.parameters.date +"  .....";
       console.log(" location is "+location1);
      }else{
   var resagent="Alright, will check for tkts to " + req.body.result.parameters.location+
   "   for"+ req.body.result.parameters.date +"   How would you like to travel?by flight,train or bus....."+"color is "+color+
       "number to be printed "+(num_val+2);
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



