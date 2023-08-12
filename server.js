var express = require("express");
var file = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const router = express.Router();

app.get("/",function(req,res){

    res.sendFile(__dirname + "/" + "main.html");
   
});



app.get("/signup", function(req,res){

    var packet = {
        name: req.query.name
        
    }
    
    console.log(packet.name);
    
    res.end();
});


var server = app.listen(process.env.PORT, function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);

});

module.exports = router;



