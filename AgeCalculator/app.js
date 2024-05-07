function calculateAge() {
  // Get the value of year of birth input field
  var yearOfBirthInput = document.getElementById("yearOfBirth").value;

  // Convert the input string to a number
  var yearOfBirth = parseInt(yearOfBirthInput);

  // Get the current year
  var currentYear = new Date().getFullYear();

  // Calculate the age
  var age = currentYear - yearOfBirth;

  // Display the result
  var resultElement = document.getElementById("result");
  resultElement.textContent = "You are " + age + " years old.";
}
