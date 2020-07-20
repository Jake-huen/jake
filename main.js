var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
var template = require('./lib/template.js');
var sanitizeHtml = require('sanitize-html');
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(express.static('css'));
app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var title = 'SOMEONE';
    var description = 'LoveDays : ';
	var list = template.list(filelist);
    var html = template.HTML(title,
      `<h2>${title}</h2>${description}
		<p><img src="/image/initial.jpg" style="width:500px"></img></p>
		`,``,list
    );
    response.send(html);
  });
});
app.get('/page/:pageId',function(request,response){
	fs.readdir('./data', function(error, filelist){
		var filteredId = path.parse(request.params.pageId).base;
		fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
			var title = request.params.pageId;
            var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description, {
              allowedTags:['h1']
            });
			//console.log(request.params.pageId);
            var list = template.list(filelist);
            var html = template.HTML(sanitizedTitle, list,
              `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
              ` <a href="/create">create</a>
                <a href="/update?id=${sanitizedTitle}">update</a>
                <form action="delete_process" method="post">
                  <input type="hidden" name="id" value="${sanitizedTitle}">
                  <input type="submit" value="delete">
                </form>`
            );
			if(request.params.pageId=='couple'){
				html = template.HTML(sanitizedTitle,list,`<h2>success?</h2>`,``);
			}
            response.send(html);
          });
        });
});
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});