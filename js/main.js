let weatherList ;
let searchInput = document.getElementById("searchInput")

function getWeather(city = "paris"){
    let myhttp = new XMLHttpRequest
    myhttp.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=628d6011772048e8895202631240701&q=${city}&days=3`)
    myhttp.send()

    myhttp.addEventListener("readystatechange", function(){
        if (myhttp.readyState == 4){
            weatherList = JSON.parse(myhttp.response)
            console.log(weatherList.forecast.forecastday[0].day.condition.text)

        }
        displayweather();
    })
}
getWeather("casablanca")


function displayweather(){
    let cartoona = `  <div class="col-md-4">
    <div class="item  text-white pb-5 ">
      <div class="itemHeader d-flex justify-content-between p-1">
        <div class="day">Today</div>
        <div class="date">${weatherList.forecast.forecastday[0].date}</div>
      </div>
      <div class="container ">
        <div class="location p-2 mt-3">${weatherList.location.name}</div>
        <div class="itemInner p-1 d-flex justify-content-evenly align-items-center">
          <div class="degree fw-bolder">
           <h1>${weatherList.current.temp_c}<sup>o</sup>C</h1>
          </div>
            <div class="weatherIcon">
              <img src="${weatherList.current.condition.icon}" alt="" class="w-100 ">
            </div>
          </div>
          <div class="weatherDesc ms-2">
          ${weatherList.current.condition.text}
          </div>
          <div class="spans  p-2 d-flex justify-content-between w-75 mt-2 ">
            <span><img src="images/icon-umberella@2x.png" alt="" class="w-25 me-1">${weatherList.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
            <span><img src="images/icon-wind@2x.png" alt="" class="w-25 me-1">${weatherList.current.wind_kph}km/h</span>
            <span><img src="images/icon-compass@2x.png" alt="" class="w-25 me-1">East</span>
          </div>

      </div>
      </div>
      </div>
  <div class="col-md-4">
    <div class="item item1  text-white pb-5 ">
      <div class="itemHeader2 text-center p-1">
        <div class="day">${weatherList.forecast.forecastday[1].date}</div>
      </div>
      <div class="container text-center ">
        <div class="weatherNextDayContent d-flex flex-column">
          <div class="imgNextDay mt-2">
            <img src="${weatherList.forecast.forecastday[1].day.condition.icon}" alt="" class="col-2 my-3">
            <h3 class="my-2 fw-bold">${weatherList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3>
            <h6 class="my-3">${weatherList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></h6>
            <p class="my-4">${weatherList.forecast.forecastday[1].day.condition.text}</p>
          </div>
        </div>
      </div>
     
      </div>
      </div>
  <div class="col-md-4">
    <div class="item   text-white pb-5 ">
      <div class="itemHeader text-center p-1">
        <div class="day">${weatherList.forecast.forecastday[2].date}</div>
      </div>
      <div class="container text-center ">
        <div class="weatherNextDayContent d-flex flex-column">
          <div class="imgNextDay mt-2">
            <img src="${weatherList.forecast.forecastday[2].day.condition.icon}" alt="" class="col-2 my-3">
            <h3 class="my-2 fw-bold">${weatherList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3>
            <h6 class="my-3">${weatherList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></h6>
            <p class="my-4">${weatherList.forecast.forecastday[2].day.condition.text}</p>
          </div>
        </div>
      </div>
     
      </div>
      </div>`
      document.getElementById("rowData").innerHTML = cartoona;
}

searchInput.addEventListener("keyup", function(){
    getWeather(searchInput.value)
})
