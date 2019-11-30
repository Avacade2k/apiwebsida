    $(document).ready(function() {
    $('#city').keyup(function() {

       var yourLocation = $("#city").val();
  $("#debug").append("You are searching for ... "+yourLocation+"\n");

dataString = "London";

$.getJSON('api.openweathermap.org/data/2.5/weather?q=' + dataString, function(json_data){
alert(JSON.stringify(json_data));
});


});
});