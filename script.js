async function getWeather(){

let city=document.getElementById("cityInput").value;

let apiKey=95e7277869396392f75c4bad32ec1ff2;

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response=await fetch(url);

let data=await response.json();

document.getElementById("city").innerText=data.name;
document.getElementById("temp").innerText="Temperature: "+data.main.temp+" °C";
document.getElementById("desc").innerText="Condition: "+data.weather[0].description;
document.getElementById("humidity").innerText="Humidity: "+data.main.humidity+" %";
document.getElementById("wind").innerText="Wind Speed: "+data.wind.speed+" m/s";

}