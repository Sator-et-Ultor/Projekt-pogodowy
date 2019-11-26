function longForecast(cityId){
fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=1e82470e3c4cd294920473dfb28d4a3d`)
.then((resp) => resp.json())
.then((data) => {
    return data.list.map((item) => generateForecastItem(item));
})
.then((divs) => {
    divs.forEach((item) => 
    document.getElementById("forecasts").appendChild(item));
});
}

function generateForecastItem(item){
  let forecastItem = document.createElement("div");
  forecastItem.innerText = item.dt_txt;
  return forecastItem;
}

