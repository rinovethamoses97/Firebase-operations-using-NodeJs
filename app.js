var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var route=require('./route/route');
app.use('/api',route);
var http = require("http");
var server = http.createServer(app);
var port = Number(process.env.PORT || 3000);
server.listen(port);
