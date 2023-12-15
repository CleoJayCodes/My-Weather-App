function newCity(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-input");
  let shownCity = document.querySelector("#current-city");

  shownCity.innerHTML = searchedCity.value;
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", newCity);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

currentDate.innerHTML = `${day} ${hours}:${minutes}`;
