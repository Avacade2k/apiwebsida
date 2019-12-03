    $(document).ready(function (){
                $('#city').keyup(function () {

                    var yourLocation = $("#city").val();
                    $("#debug").append("You are searching for ... " + yourLocation + "\n");

                    var apikey = "7b1c59b130e4e81c06b511ec3e8dc91a";

                    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + yourLocation + "&APPID=" + apikey, function (json_data) {
                        console.log(JSON.stringify(json_data));
                    });
                    $.getJSON('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + yourLocation + '&types=(cities)&key=AIzaSyBrJnsfvW-Eeu69eBGTWZ_UbTdHRkYHfXQ', function (json_data) {
                        console.log(JSON.stringify(json_data));
                    });




                });
            });
