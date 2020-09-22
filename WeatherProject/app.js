const express = require('express');
const https = require("https");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html")

})

app.post('/', function(req,res){

  const query = req.body.cityName; //we dont need to hardcode charelston in anymore
  const apiKey = "95881f5849639339c8a8dee88d55af14";
  const unit = "imperial";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response){ //response cant be res because we used it already.
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      res.write("<h3>The weather description is " + weatherDescription + "</h3>");
      res.write("<h1>The temperature in " + query + " is currently " + temp + "degrees farenheit</h1>");
      res.send();
      // console.log("It is currently " + temp + " degrees. With " + weatherDescription);
    })
  })
})



app.listen(4000, function(){
  console.log("Server is running on port 4000")
})
