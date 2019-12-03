$(document).ready(function() {
    $(document).on('keypress',function(e) {
    if(e.which == 13) {
        var yourLocation = $("#city").val();
        $("#debug").append("You are searching for ... "+yourLocation+"\n");
        $(document).ready(function (){
            $('#city').on('keypress',function(e) {
            if(e.which == 13) {
                var yourLocation = $("#city").val();
                $("#debug").append("You are searching for ... " + yourLocation + "\n");
                var apikey = "7b1c59b130e4e81c06b511ec3e8dc91a";
                $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + yourLocation + "&APPID=" + apikey, function(json_data){
                    console.log(JSON.stringify(json_data));
                    $('#data').val('Country:' +json_data.sys.country+"\nCity:" +json_data.name+"\nTimezone:"+json_data.timezone+"\nWeather:"+json_data.weather[0].main+"\nWind:"+json_data.wind.speed+"\nTemperature:"+json_data.main.temp);
                    });
                }; 
            });
        });}
    });
});