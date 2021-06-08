var searchBtn = $("#searchBtn");
var searchedCity = $("#searchBar").val();
var date = moment();
var currentDate = date.format("LLLL");
var forecastOne = date.add(1, "day").format("l");
var forecastTwo = date.add(2, "days").format("l");
var forecastThree = date.add(3, "days").format("l");
var forecastFour = date.add(4, "days").format("l");
var forecastFive = date.add(5, "days").format("l");

var apiKey = "7211e2dd4d2c7c0bb475207d2efebac6";
var currentWeather = "api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial"
var forecastWeather = "api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial"

$(document).ready(function() {
    $(".currentDate").text(currentDate);

    $(".weatherOne").text(forecastOne);
    $(".weatherTwo").text(forecastTwo);
    $(".weatherThree").text(forecastThree);
    $(".weatherFour").text(forecastFour);
    $(".weatherFive").text(forecastFive);
})

searchBtn.click(function() {
    $.ajax({
        url:currentWeather,
        method:"GET",
    }).then(function (response){

    });
})