module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
		<link href = "./CSS/title.css" rel="stylesheet" type="text/css"></link>
		<title style="color:blue">Someone - ${title}</title>
		<meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">Someone</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul display:inline>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'<br>'+'</ul>';
    return list;
  }
}