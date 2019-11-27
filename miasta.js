function findTown(){
    document.getElementById("hidden").style.display = "inline";
    var town = document.getElementById('town1').value;
    fetch ('http://api.openweathermap.org/data/2.5/weather?q='+town+'&appid=1e82470e3c4cd294920473dfb28d4a3d')
    .then(function(resp){return resp.json()})
    .then(function(data){

        document.querySelector('#City').textContent = data.name;
        document.querySelector('#tem').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud').innerHTML= data.weather[0].description
        document.querySelector("#icon").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        document.querySelector('#City2').textContent = data.name;
        document.querySelector('#tem2').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud2').innerHTML= data.weather[0].description
        document.querySelector("#icon2").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        document.querySelector('#City3').textContent = data.name;
        document.querySelector('#tem3').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud3').innerHTML= data.weather[0].description
        document.querySelector("#icon3").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';

      
        //console.log(data);
    })
    .catch(function(){
        //catch anny errors
    })
 
 }
 function findTown2(){
     document.getElementById("hidden").style.display = "inline";
    var town2 = document.getElementById('town2').value;
    fetch ('http://api.openweathermap.org/data/2.5/weather?q='+town2+'&appid=1e82470e3c4cd294920473dfb28d4a3d')
    .then(function(resp){return resp.json()})
    .then(function(data){

        longForecast(data.id);

        document.querySelector('#City').textContent = data.name;
        document.querySelector('#tem').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud').innerHTML= data.weather[0].description
        document.querySelector("#icon").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        document.querySelector('#City2').textContent = data.name;
        document.querySelector('#tem2').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud2').innerHTML= data.weather[0].description
        document.querySelector("#icon2").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        document.querySelector('#City3').textContent = data.name;
        document.querySelector('#tem3').innerHTML = Math.round((data.main.temp - 273)) + '&deg';
        document.querySelector('#cloud3').innerHTML= data.weather[0].description
        document.querySelector("#icon3").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        //console.log(data);
       
    })
    .catch(function(){
        //catch anny errors
    })
 
 }