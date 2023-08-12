var express = require("express");
var fs = require("fs");

//var bodyParser = require("body-parser");

var app = express();
app.use("/public",express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
//const router = express.Router();

app.get("/",function(req,res){

    res.render(__dirname + "/" + "main.ejs");
   
});



app.get("/signup", function(req,res){

    res.render(__dirname + "/"+ "signup.ejs");
})

app.get("/aboutyou", function(req,res){

    
    fs.readFile("log.txt","utf8" ,function(err,file){

        var obj = JSON.parse(file);
        
        console.log(`FILE:${file} `);
        console.log(obj);
        
       res.render(__dirname + "/aboutyou.ejs", {obj});


    });
});


app.get("/signupAction", function(req,res){

    var packet = {
        name: req.query.name,
        email: req.query.email
        
    }

  
   
    fs.writeFile("log.txt", `{"name" :"${packet.name}", "email" :"${packet.email}"}` , function(err){

        if(err) throw err;
        console.log("Saved");
    })


  
    console.log(packet.name);
    console.log(packet.email);

    
    
   
});


var server = app.listen(process.env.PORT || 8000, function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port);

});





