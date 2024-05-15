document.addEventListener("DOMContentLoaded", function () {
  const powerButton = document.getElementById("power-button");
  const lightBulb = document.getElementById("light-bulb");

  powerButton.addEventListener("click", function () {
    powerButton.classList.toggle("on");
    lightBulb.classList.toggle("on");
  });
});
