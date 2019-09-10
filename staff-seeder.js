var Staff = require('../models/staff');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;  // connect online
var uri = "mongodb+srv://dat:vippergod12@data-imllf.mongodb.net/test"; // connect online

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping');

var staff = [
	new Staff({
		ID : 's01',
		name : 'Pham Nhu Y',
		age : 21,
		password : '123'
	}),
];

MongoClient.connect(uri, function(err, db)
{
  if (err) throw err;
    var dbo = db.db("3dwebsite");
		for(var i = 0; i< staff.length; i++)
	    dbo.collection("staff").insertOne(staff[i], function(err, res)
			{
	      if (err) throw err;
	    });
		db.close();
		console.log("document inserted");
});
