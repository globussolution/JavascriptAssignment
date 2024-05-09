function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (num1 + num2);
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (num1 - num2);
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + num1 * num2;
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (num2 !== 0) {
    document.getElementById("result").innerText = "Result: " + num1 / num2;
  } else {
    document.getElementById("result").innerText = "Cannot divide by zero";
  }
}

function power() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText =
    "Result: " + Math.pow(num1, num2);
}
