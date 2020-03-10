///////////////////////////////////////////

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let dayNumber = date.getDay();
  let day = days[dayNumber];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes} `;
}
let currentDate = new Date();
let formattedDate = formatDate(currentDate);
let dateAndTime = document.querySelector("#day-hour");
dateAndTime.innerHTML = `${formattedDate}`;
////////////////////////////////////////////

/////////////////////////////

function weatherUpdate(response) {
  console.log(response.data);
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)} Cº`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity} %`;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  let fahrenheitTemperatureElement = document.querySelector(
    "#fahrenheitTemperature"
  );
  fahrenheitTemperatureElement.innerHTML = `${(Math.round(
    response.data.main.temp
  ) *
    9) /
    5 +
    32} ºF`;
}

function search(city) {
  let apiKey = "03d4a24ecf9349320cceeda75640d865";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherUpdate);
}

function handleSubmit(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-input");
  search(inputElement.value);
}

let form = document.querySelector("#password-form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", weatherUpdate);

//////////////////

search("Timbuktu");
