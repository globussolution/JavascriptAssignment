// ;

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=35.3967&lon=74.6311&appid=c153479685c47f1b34a83591f3b1acbe"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    var degree = Math.floor(data.main.temp - 273) + "°C";
    document.getElementById("temperature").innerText = degree;
  });
