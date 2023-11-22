const apiKey = "dee9573140bfcf3b68a95aa447b18e8d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&=";

const searchBox = document.querySelector(".search.input");
const searchBtn = document.querySelector(".search.button");


async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = data.main.temp + "°C";
    document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});