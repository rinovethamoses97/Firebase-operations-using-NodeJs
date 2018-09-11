var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var route=require('./route/route');
app.use('/api',route);


app.listen(3000,function(){
	console.log("Server running in port:3000");
});