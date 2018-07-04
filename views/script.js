$(document).ready(function(){
  
  // http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=APIKEYHERE
 
  
  $.getJSON("", function(weather){

  	console.log(weather.main.temp);
    var temp = weather.main.temp;
    $("p.api").html("");


  });

});