const searchbox = document.querySelector('#place');
searchbox.addEventListener('keypress', setQuery);

const key=`3680ed8de36ff0a46d163744fdb1b1cc`;

getResults(`Delhi`);

function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`)
      .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('#city_name');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    
    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
  
    let weather_change = document.querySelector('#weather');
    weather_change.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c | ${weather.weather[0].main}`;

    const d=new Date();
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]; 
    var day=days[d.getDay()];
    var months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    var month=months[d.getMonth()];
    let date=document.querySelector("#date");
    date.innerText=`${day} | ${month} ${d.getDay()} | ${d.getHours()}:${d.getMinutes()}`;
}  