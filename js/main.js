var express = require('express');
var app = express();
var fs = require('fs');

app.get('*',function(request,response,next){
	fs.readdir('./data',function(error,filelist){
		request.list = filelist;
		next();
	});
});
app.listen(3000, function(){
	console.log(`Example app listening on port 3000`)
});
/*var express = require('express');
var app = express();
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');
var topicRouter = require('./routes/topic')
var indexRouter = require('./routes/index');
var helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(compression());
app.use(bodyParser.urlencoded({extended:false}));
app.get('*',function(request,response,next){
	fs.readdir('./data',function(error,filelist){
		request.list = filelist;
		next();
	});
});
//route,routing
app.use('/topic',topicRouter);//topic으로 시작하는곳에 topicRouter이름의 미들웨어를 적용하겠다.
app.use('/',indexRouter);
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, function(){
	console.log(`Example app listening on port 3000`)
});*/