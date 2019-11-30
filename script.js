    $(document).ready(function() {
    $('#city').keyup(function() {

       var yourLocation = $("#city").val();
  $("#debug").append("You are searching for ... "+yourLocation+"\n");

var dataString = "London";
var apikey = "7b1c59b130e4e81c06b511ec3e8dc91a";

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + dataString + "&APPID=" + apikey, function(json_data){
alert(JSON.stringify(json_data));
});


});
});