var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var admin = require("firebase-admin");

var router=express.Router();
router.use(cors());
router.use(bodyparser.json());
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://breatheeasy-7c7af.firebaseio.com"
});
router.get('/insert/:name',function(req,res){
	var db = admin.database();
	var ref=db.ref();
	ref.set({
		name:req.params.name,
	})
	res.send("success");
});
module.exports=router;