var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var router=express.Router();
router.use(cors());
router.use(bodyparser.json());
var admin = require("firebase-admin");
var admin1 = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
var serviceAccount1 = require("./serviceAccountKey1.json");
var spo2=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spo2database.firebaseio.com/"
});
var pulse=admin1.initializeApp({
  		credential: admin.credential.cert(serviceAccount1),
  		databaseURL: "https://pulsedatabase-9cabd.firebaseio.com/"
},"pulse");
router.get('/insert/:d1/:d2',function(req,res){
	var db = spo2.database();
	var ref1=db.ref('ard01/0/spo2');
	ref1.push(req.params.d1);
	var db1 = pulse.database();
	var ref2=db1.ref('ard01/0/pulse');
	ref2.push(req.params.d2);
	res.send("success");
});
module.exports=router;
