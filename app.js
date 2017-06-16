<<<<<<< HEAD
const express = require('express')
const app = express()
const port = (process.env.PORT || 5000);
=======
const express = require('express');
const app = express();

const REST_PORT = (process.env.PORT || 3000); 
 





>>>>>>> ada50beec302d6a12ee1d0b1d9a44148ac683e3d
app.get('/', function (req, res) {
  res.send('Hello World!');
})

<<<<<<< HEAD
app.listen(3012, function () {
  console.log('Example app listening on port '+port+'!')
=======
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
>>>>>>> ada50beec302d6a12ee1d0b1d9a44148ac683e3d
})
