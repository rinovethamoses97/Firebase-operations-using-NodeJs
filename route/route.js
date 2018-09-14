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
router.get('/insert/:d1/:d2',function(req,res){
	var db = admin.database();
	var ref=db.ref('ard01/');
	ref.set({
		d1:req.params.d1,
		d2:req.params.d2,
	})
	res.send("success"+req.params.d1+req.params.d2);
});
module.exports=router;