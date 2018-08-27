const express=require('express');
const app=express();
var mongodb = require('mongodb');
var path = require('path');
var bodyParser = require('body-parser');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/test');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/data', function (req, res) {
    dbConn.then(function(db) {
        var dbo = db.db("test");
        var name=JSON.parse(req.body.Name);
 
        // var user={
        // name:(req.body.Name),
        // email:req.body.Email,
        // degree:req.body.Degree,
        // branch:req.body.Branch
        // };
        throw new Error("BROKEN");
        dbo.collection('demo').insertOne({user});
    });    
    res.send('Data received successfully');
});
// console.log("dwe");
// app.get("/",(req,res)=>{
// res.send("hai");
// });
app.listen(5000);