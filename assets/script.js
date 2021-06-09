var searchBtn = $("#searchBtn");
// currrent & forecast dates to be used when page loads
var date = moment();
var currentDate = date.format("LLLL");
var forecastOne = date.add(1, "day").format("l");
var forecastTwo = date.add(2, "days").format("l");
var forecastThree = date.add(3, "days").format("l");
var forecastFour = date.add(4, "days").format("l");
var forecastFive = date.add(5, "days").format("l");


$(document).ready(function() {
    $(".currentDate").text(currentDate);
    // each day should be present when page loads
    $(".weatherOne").text(forecastOne);
    $(".weatherTwo").text(forecastTwo);
    $(".weatherThree").text(forecastThree);
    $(".weatherFour").text(forecastFour);
    $(".weatherFive").text(forecastFive);

})

// current weather and 5 day forcast should load
searchBtn.click(function(event) {
    console.log("It's linked");
    event.preventDefault();
    var searchedCity = $("#searchBar").val().trim();

    var apiKey = "7211e2dd4d2c7c0bb475207d2efebac6";
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial"
   
    var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial"

    if (searchedCity == null) {
        console.log("no city searched");
    }else{
        $.ajax({
            url:currentWeather,
            method:"GET",
        }).then(function (response){
            var iconsURL = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
            // current weather call
            $('.cityh2').text(response.name);
            $('.currentIcon').attr('src', iconsURL);
            $('#currentTemp').text('Tempurature: ' +Math.round(response.main.temp)+ '° F');
            $('#currentHum').text('Humidity: ' +response.main.humidity + '%');
            $('#currentWS').text('Wind Speed: ' +response.wind.speed+ 'mph');

            // UV Call
            var currentUVURL = "https://api.openweathermap.org/data/2.5/onecall?appid=" +apiKey+ "&lat=" +response.coord.lat+ "&lon="+response.coord.lon
            $.ajax({
            url:currentUVURL,
            method:"GET",
            }).then(function(response){
                $('#currentUV').text('UV Index: ' +response.current.uvi );
                var uvColor = parseInt(response.current.uvi);
                if(uvColor <= 3) {
                    $('#currentUV').addClass("goodUV");
                } else if(uvColor > 3 && uvColor < 8) {
                    $('#currentUV').addClass("mediumUV");
                }else if(uvColor >= 8) {
                    $('#currentUV').addClass("badUV");
                };
            });
        });

    };
    
    
});

$.fn.retrieveLocal = function(){

}

