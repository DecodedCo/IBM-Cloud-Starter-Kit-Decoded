jQuery(document).ready(function(){
  
  var sensorURL = "http://127.0.0.1:1880/data"
  
  jQuery.getJSON(sensorURL, function(sensorData){

  	console.log(sensorData);

    // change the following line to show the current temperature or some other data point from the SensorTag 
    jQuery("p.api").html("This paragraph is controlled by jQuery");

  });

});
