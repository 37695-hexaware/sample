
'use strict';
var apiai = require('apiai');
 
var appai = apiai("67d9605566d14a29ba1197e2e44dc2a5");
 
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 
var options = {
    sessionId: '567yh8'
};
 
 
 
 
function simpleResponse (req, res) {
  console.log('inside simpleResponse');
  const appapi = new ApiAiApp({request: req, response: res});
  const WELCOME_INTENT = 'input.welcome';
  const LOOKUP_INTENT = 'input.lookup_citidata';
  const actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent);
  actionMap.set(LOOKUP_INTENT, lookupdataIntent);
  appapi.handleRequest(actionMap);
 
 
};
 
 
 
app.post('/',function(req,res){
      console.log('REQUESTTTTT:::'+JSON.stringify(req.body));
      if(req.body.result.parameters.company_name)
      // || (req.body.result.parameters.date_time) || (req.body.result.parameters.financial_balance_sheet_data)
        {
        var resagent="Sure, will check the details  from " + req.body.result.parameters.company_name+ " to "+
      req.body.result.parameters.date_time+
        "   for "+ req.body.result.parameters.financial_balance_sheet_data +"  .....";
 
 
       processJSON(clientName, financialYear, metricsKey);
 
      }
      else{
      var resagent="Alright, will check for  " + req.body.result.parameters.company_name+
            "   for"+req.body.result.parameters.date_time +"  ...";
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
