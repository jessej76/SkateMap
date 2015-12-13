var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var app  = express();

function REST(){
    var self = this;
    self.connectMysql();
};


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Skatemap',
  password : 'byebye',
  database : 'Skatemap',
});

app.get('/',function(req,res){
  res.sendfile('index.html');
});
app.use(express.static("view"))
app.use(express.static("styles"))
app.use(express.static("scripts"))


app.get('/locations',function(req,res){
  connection.connect();
  connection.query('SELECT position,location,avg(rate) avg_rate' +
  '	FROM SkateMap.Comments JOIN SkateMap.Locations ON location=locationId' +
  '	GROUP BY location ORDER BY avg_rate DESC;', function(err,rows){
      if(err) {   console.log("Problem with MySQL"+err);
    } else  {
    res.end(JSON.stringify(rows));
    }
  });
  connection.end();
});


app.listen(9000,function(){
console.log("It's Started on PORT 9000");
});
