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
  let minutes = date.getMinutes();

  return `${day} ${hour}:${minutes} `;
}
let currentDate = new Date();
let formattedDate = formatDate(currentDate);
let dateAndTime = document.querySelector(".day-hour");
dateAndTime.innerHTML = `${formattedDate}`;

////////////////////////////////////////////

function displayCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("h2");
  console.log(cityName);
  let input = document.querySelector("#search-input");
  cityName.innerHTML = `${input.value}`;
}

let form = document.querySelector("#password-form");
form.addEventListener("submit", displayCity);
form.addEventListener("submit", handleSubmit);
////////////////////////////////////////////

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let cityName = input.value;
  console.log(cityName);
  let apiKey = "03d4a24ecf9349320cceeda75640d865";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showResponse);
}

//navigator.geolocation.getCurrentPosition(handlePosition);

function showResponse(response) {
  let temperatureDisplay = document.querySelector("h1");
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  temperatureDisplay.innerHTML = `${temperature} ºC`;
}

////////////////////////////////////////////
