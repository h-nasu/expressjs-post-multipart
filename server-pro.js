var fs = require('fs');
var http = require('http');
var https = require('https');
var express = require("express");
var app     = express();

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/tmp')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })

//var fs = require('fs');
var request = require('request');

var options = {
   key  : fs.readFileSync(__dirname+'/ssl/key.pem'),
   cert : fs.readFileSync(__dirname+'/ssl/cert.pem')
};

app.use(express.static(__dirname + '/src/client'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

var pastec = require ('pastecapi') ({
  endpoint: 'http://local.co:4212'
});

var imageInterval = setInterval(function(){
  pastec.addImage(__dirname+"/images/mueythai1.jpg", 1, function(err){
    if (err) return console.error(err);
    pastec.addImage(__dirname+"/images/monalisa.jpg", 2, _saveIndex);
  });
},2000);

function _saveIndex(err) {
  if (err) return console.error(err);
  console.log('Images Added');
  clearInterval(imageInterval);
  pastec.writeIndex('/pastec/test.dat',function(err, res){
    if (err) return console.error(err);
    console.log(res);
  });
}




app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.post('/api',upload.single('tmpfile'),function(req,res){
  console.log(req.file);

  var filePath = req.file.path;
  pastec.searchIndex(filePath, function(err, matches) {
    if (err) return console.error(err);

console.log(matches);
    res.send(matches);
    fs.unlink(filePath);

  });

});




// for testing
app.get('/api/test',function(req,res){
  var filePath = __dirname+'/tmp/tmpfile-1467356815517';
  fs.readFile(filePath, function (err, data) {
    if (err) return console.error(err);

    options = {
      url: 'http://localhost:4212/index/searcher',
      body: data
    }

    request.post(options, function (err, message, body) {
      if (err) return console.error(err);

      console.log(body);
      res.send(body);
      fs.unlink(filePath);
    });
  });

  

});

//app.listen(3000);
http.createServer(app).listen(3000, function(){
  console.log('3000 Started!');
});

https.createServer(options, app).listen(3443, function () {
   console.log('3443 SSL Started!');
});

console.log("Running at Port 3000");
