jQuery(document).ready(function(){
  
  // get a valid API key for OpenWeatherMap, then replace APIKEYHERE with your actual key in the following line 
  var sensorURL = "http://127.0.0.1:1880/data"
  
  jQuery.getJSON(sensorURL, function(sensorData){

  	console.log(sensorData);

    // change the following line to show the current temperature 
    jQuery("p.api").html("This paragraph is controlled by jQuery");

  });

});
