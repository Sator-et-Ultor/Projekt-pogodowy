function longForecast(cityId){

    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=1e82470e3c4cd294920473dfb28d4a3d`)
        .then((resp) => resp.json())
        .then((data) => {
            let usedDates = [];
            return data.list.filter(item => isItemAtNeededTime(item))
                .map((item) => generateForecastItem(item, usedDates));
        })
        .then((divs) => {
            divs.forEach((item) =>
                document.getElementById("forecasts").appendChild(item));
        });
}

function generateForecastItem(item, usedDates) {
    return generateDivWithSubElements([
        generateDivWithText(formatDate(item, usedDates),1),
        generateDivWithText(formatTime(item)),
        createImage(getIconUrl(item.weather[0].icon)),
        generateDivWithText(getOverallWeatherDescription(item),2),
        generateDivWithText(getTemperature(item),3),
        generateDivWithText(getWindSpeed(item),4)]);
}

function getIconUrl(iconName) {
    return `http://openweathermap.org/img/wn/${iconName}.png`;
}

function createImage(imageLink) {
    let img = document.createElement("img");

    img.src = imageLink;
    return img;
}

function generateDivWithSubElements(divs) {
    let element = document.createElement("div");
    element.className = 'custom-class2';
    divs.forEach((item) =>
        element.appendChild(item));
    return element;
}

function generateDivWithText(content, counter) {
    let element = document.createElement("div");
    if(counter===1)
    element.innerHTML = `<h3>Day : </h3>`+ content;
    if(counter===2)
        element.innerHTML = `<h3>Clouds : </h3>`+ content;
    else 
        element.innerHTML = content;
    element.className = 'custom-class';
    return element;
}

function isItemAtNeededTime(item) {
    let time = parseTime(item.dt_txt);
    return time === '00:00:00' || time === '06:00:00' || time === '12:00:00' || time === '18:00:00';
}

function parseTime(dt_txt) {
    return dt_txt.split(" ")[1];
}

function formatTime(item) {
    let time = parseTime(item.dt_txt);
    if (time === '00:00:00') {
        return 'Night';
    }
    if (time === '06:00:00') {
        return 'Morning';
    }
    if (time === '12:00:00') {
        return 'Day';
    }
    if (time === '18:00:00') {
        return 'Evening';
    }
}

function formatDate(item, usedDates) {
    let timestamp = new Date (item.dt * 1000);
    const date = timestamp.toString().slice(0, 10);
    if (usedDates.includes(date)){
        return '';
    } else {
        usedDates.push(date);
        return date;
    }
}

function getTemperature(item) {
    const temperature = Math.round(item.main.temp);
    const sign = temperature > 0 ? '+' : '';
    return `${sign}${temperature}`;
}

function getWindSpeed(item) {
    return Math.round(item.wind.speed * 3.6);
}

function getOverallWeatherDescription(item){
    return item.weather[0].description;
}


