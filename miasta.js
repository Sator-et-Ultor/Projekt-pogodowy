function findTown(){
    document.getElementById("hidden").style.display = "inline";
    var town2 = document.getElementById('town2').value;
    var town = document.getElementById('town1').value;

   
    fetch ('http://api.openweathermap.org/data/2.5/weather?q='+town+'&appid=1e82470e3c4cd294920473dfb28d4a3d&units=metric')
    .then(function(resp){return resp.json()})
    .then(function(data){

        document.querySelector('#City').textContent = data.name;
        document.querySelector('#tem').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('#cloud').innerHTML= data.weather[0].description
        document.querySelector("#icon").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        //Current data
        var CurDate = new Date(data.dt * 1000);
        var dzien = CurDate.getDate();
        if(dzien<10) dzien = "0"+dzien;
        var miesiac = CurDate.getMonth()+1; 
        if(miesiac<10) miesiac = "0"+miesiac;
        var rok = CurDate.getFullYear();
        document.querySelector('#data').innerHTML = dzien+"."+miesiac+"."+rok+"  "
        //Time of sunrise
        var sunrise = new Date(data.sys.sunrise * 1000);
        var godzina = sunrise.getHours();
        if(godzina<10) godzina = "0"+godzina;
        var minuta = sunrise.getUTCMinutes();
        if(minuta<10) minuta = "0"+minuta;
        document.querySelector('#sunrise').innerHTML = godzina+":"+minuta; 
        //Time of sunset
        var sunset = new Date(data.sys.sunset * 1000);
        var godzina = sunset.getHours();
        if(godzina<10) godzina = "0"+godzina;
        var minuta = sunset.getUTCMinutes();
        if(minuta<10) minuta = "0"+minuta;
        document.querySelector('#sunset').innerHTML = godzina+":"+minuta; 

    })
    .catch(function(){
        //catch anny errors
    })
 }
 function findTown2(){
     document.getElementById("hidden").style.display = "inline";
    var town2 = document.getElementById('town2').value;
    fetch ('http://api.openweathermap.org/data/2.5/weather?q='+town2+'&appid=1e82470e3c4cd294920473dfb28d4a3d&units=metric')
    .then(function(resp){return resp.json()})
    .then(function(data){

        longForecast(data.id);

        document.querySelector('#City').textContent = data.name;
        document.querySelector('#tem').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('#cloud').innerHTML= data.weather[0].description
        document.querySelector("#icon").innerHTML = '<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">';
        //Current data
        var CurDate = new Date(data.dt * 1000);
        var dzien = CurDate.getDate();
        if(dzien<10) dzien = "0"+dzien;
        var miesiac = CurDate.getMonth()+1; 
        if(miesiac<10) miesiac = "0"+miesiac;
        var rok = CurDate.getFullYear();
        document.querySelector('#data').innerHTML = dzien+"."+miesiac+"."+rok+"  "
        //Time of sunrise
        var sunrise = new Date(data.sys.sunrise * 1000);
        var godzina = sunrise.getHours();
        if(godzina<10) godzina = "0"+godzina;
        var minuta = sunrise.getUTCMinutes();
        if(minuta<10) minuta = "0"+minuta;
        document.querySelector('#sunrise').innerHTML = godzina+":"+minuta; 
        //Time of sunset
        var sunset = new Date(data.sys.sunset * 1000);
        var godzina = sunset.getHours();
        if(godzina<10) godzina = "0"+godzina;
        var minuta = sunset.getUTCMinutes();
        if(minuta<10) minuta = "0"+minuta;
        document.querySelector('#sunset').innerHTML = godzina+":"+minuta; 
    })
    .catch(function(){
        //catch anny errors
    })
 
 }