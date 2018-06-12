$(document).ready(function(){
  
  // http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c0adb0b1df35ed420e67d2c8c375fcfb
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c0adb0b1df35ed420e67d2c8c375fcfb", function(weather){

  	console.log(weather.main.temp);

  	var temp = weather.main.temp;

  	$("p.api").html("The current temperature in London is " + temp + "&deg;C");


  });

});