
const express = require('express')
const app = express()
const port = (process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port '+port+'!');

})
