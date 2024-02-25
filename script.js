
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const wthr = document.querySelector(".weather");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const img = document.querySelector(".img");

btn.addEventListener("click",()=> { 
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4a8f001d1f97c08d69d1ba2d09980e5b'}`)
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src=https://openweathermap.org/img/wn/${iconCode}.png alt ="weather Icon"/>`

        const weatherCity = data.name;
        const wearherCountry = data.sys.country;
        wthr.innerHTML=`${weatherCity}, ${wearherCountry}`;

        let weatherTemperature= data.main.temp;
        weatherTemperature = weatherTemperature - 273;
        const wtemp = weatherTemperature.toFixed(2)
        temp.innerHTML = `${wtemp}°C`

        const weatherdesc = data.weather[0].description;
        desc.innerHTML = weatherdesc;
    })

}