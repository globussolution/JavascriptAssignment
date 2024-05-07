var timer;
var startTime;
var elapsedTime = 0;
var running = false;

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateStopwatch, 10);
    running = true;
    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
    document.getElementById("stopBtn").disabled = false;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  running = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
}

function stopStopwatch() {
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  updateStopwatch();
  running = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("stopBtn").disabled = true;
}

function clearStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  updateStopwatch();
  running = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("stopBtn").disabled = true;
}

function updateStopwatch() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var minutes = Math.floor(elapsedTime / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((elapsedTime % 1000) / 10);
  document.getElementById("stopwatch").textContent =
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2) +
    ":" +
    ("0" + milliseconds).slice(-2);
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("pauseBtn").addEventListener("click", pauseStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("clearBtn").addEventListener("click", clearStopwatch);
