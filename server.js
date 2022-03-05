var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  


var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/getmetadata', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       module_name:req.body.module_name,  
       screen_name:req.body.screen_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) 
