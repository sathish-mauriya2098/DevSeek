var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/test');

var app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/data', function (req, res) {
    dbConn.then(function(db) {
        var dbo = db.db("test");
        delete req.body._id; // for safety reasons
        dbo.collection('demo').insertOne(req.query.id);
    });    
    res.send('Data received successfully');
});



app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );