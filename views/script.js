jQuery(document).ready(function(){
  
  // get a valid API key for OpenWeatherMap, then replace APIKEYHERE with your actual key in the following line 
  var openweatherURL = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=APIKEYHERE"
  
  jQuery.getJSON(openweatherURL, function(data){

  	console.log(data.main.temp);
    var temperature = data.main.temp;
    // change the following line to show the current temperature 
    jQuery("p.api").html("This paragraph is controlled by jQuery");

  });

});
