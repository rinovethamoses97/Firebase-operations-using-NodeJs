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
	var ref=db.ref('ard01/test');
	ref.update({
		d1:req.params.d2,
		d1:req.params.d3,
		
	})
	res.send("success"+req.params.d1+req.params.d2+req.params.d3);
});
module.exports=router;
