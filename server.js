const express = require('express');
const app = express();
const path = require('path');
//app.use(express.static(__dirname + '/angularapp'));
app.use(express.static(__dirname + '/dist/angular-heroku01'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res){
//res.sendFile(path.join(__dirname + '/angularapp/index.html'));
res.sendFile(path.join(__dirname + '/dist/angular-heroku01/index.html'));
});
console.log('Build successful!!');