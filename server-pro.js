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

var fs = require('fs');
var request = require('request');

app.use(express.static(__dirname + '/src/client'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 


app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.post('/api',upload.single('tmpfile'),function(req,res){
  console.log(req.file);

  var filePath = req.file.path;
  fs.readFile(filePath, function (err, data) {
    if (err) return console.error(err);

    options = {
      url: 'http://local.co:4212/index/searcher',
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




// for testing
app.get('/api/test',function(req,res){
  var filePath = __dirname+'/tmp/tmpfile-1467356815517';
  fs.readFile(filePath, function (err, data) {
    if (err) return console.error(err);

    options = {
      url: 'http://local.co:4212/index/searcher',
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

app.listen(3000);

console.log("Running at Port 3000");