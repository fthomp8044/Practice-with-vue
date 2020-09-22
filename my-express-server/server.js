//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(req,res){
  res.send("<h1>Chello Mup</h1>");
})

app.get("/contact", function(req, res){
  res.send("My contact info is fthomp2430@gmail.com");j
})

app.get("/about", function(req,res){
  res.send("<p>This is a page about me</p>")
});

app.get("/hobbies", function(req,res){
  res.send("<ul><li>Hiking</li><li>Hanginng out with friends</li><li>Coding</li><li>Drinking Beer</li></ul>")
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
