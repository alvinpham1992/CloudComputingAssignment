var Customer = require('../models/customer');
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;  // connect online
var uri = "mongodb+srv://dat:vippergod12@data-imllf.mongodb.net/test"; // connect online

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping');

var customer = [
	new Customer({
		ID : 'kh01',
		password : 123,
		hoten : 'Y Pham',
		diachi  : 'Hồ Chí Minh',
		email  : 'pny@gmail.com',
		dienthoai  : '123456',
	}),
];

MongoClient.connect(uri, function(err, db)
{
  if (err) throw err;
    var dbo = db.db("3dwebsite");
		for(var i = 0; i< customer.length; i++)
	    dbo.collection("customer").insertOne(customer[i], function(err, res)
			{
	      if (err) throw err;
	    });
		db.close();
		console.log("document inserted");
});
