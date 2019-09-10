var Card = require('../models/card');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;  // connect online
var uri = "mongodb+srv://dat:vippergod12@data-imllf.mongodb.net/test"; // connect online

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping');

var card = [
	new Card({
		name : 'Pham Nhu Y',
		ID : 'card01',
	}),
];

MongoClient.connect(uri, function(err, db)
{
  if (err) throw err;
    var dbo = db.db("3dwebsite");
		for(var i = 0; i< card.length; i++)
	    dbo.collection("card").insertOne(card[i], function(err, res)
			{
	      if (err) throw err;
	    });
		db.close();
		console.log("document inserted");
});
