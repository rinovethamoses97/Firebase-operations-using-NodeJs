var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var router=express.Router();
router.use(cors());
router.use(bodyparser.json());
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://breatheeasy-7c7af.firebaseio.com"
});
router.get('/insert/:d1/:d2/:d3',function(req,res){
	var db = admin.database();
	var p1=req.params.d1;
	var ref1=db.ref('ard01/0/pulse');
	ref1.update({
		""+p1:req.params.d2,
	})
	
	
	var ref2=db.ref('ard01/0/spo2');
	ref2.update({
		p1:req.params.d3,
	})
	res.send("success"+req.params.d1+req.params.d2+req.params.d3);
});
module.exports=router;
