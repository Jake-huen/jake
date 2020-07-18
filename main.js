var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var template = require('./lib/template.js');
 
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var title = 'SOMEONE';
    var description = 'LoveDays :';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/message">message</a>`
    ); 
    response.send(html);
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});