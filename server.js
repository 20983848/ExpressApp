var express = require("express");
var fs = require("fs");
//var bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

//app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
//const router = express.Router();

app.get("/",function(req,res){

    res.render(__dirname + "/" + "main.ejs");
   
});



app.get("/signup", function(req,res){

    var packet = {
        name: req.query.name
        
    }

  
   
    fs.writeFile("log.txt", packet.name , function(err){

        if(err) throw err;
        console.log("Saved");
    })


  
    console.log(packet.name);
    
   
});


var server = app.listen(process.env.PORT || 8000, function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);

});





