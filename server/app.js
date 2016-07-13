"use strict";

let express = require("express");
let app = express();

app.use( express.static(__dirname + "/../client"));

app.get("/sports",function(req,res){
  res.json(["Cycling","Weightlifting"]);
});

app.listen(8181, function () {
  console.log('Listening on port 8181');
});
