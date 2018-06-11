$(document).ready(function(){
  
  // We will be getting data from this API - Open Weather Map
  
  // Use getJson function to get information from above URL
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c0adb0b1df35ed420e67d2c8c375fcfb", function(weather){
        console.log(weather); 
        
        var currTemp = weather.main.temp;
        console.log(currTemp);
        
        $("p.api").html("The current temperature in London is " + currTemp + "&deg;C");   
  });

});