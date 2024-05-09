// var amount = document.getElementById("amount");
// var showResult = document.getElementById;
// var expense = 0;
// var salary = 0;

// var savings = 0;
// function calculateExpense() {
//   expense = parseInt(document.getElementById("amount").value) + expense;
//   console.log("expense=>" + expense);

//   console.log("salary=>" + salary);
//   var savings = income() - expense;
//   console.log("expense=>" + savings);

//   totalExpenses.innerHTML = expense;
//   showResult.innerHTML = savings;
// }
// function income() {
//   salary = parseInt(document.getElementById("amount").value);
//   showSalary.innerHTML = "Your salary is: " + salary;
// }

// //new code
let totalIncome = 0;
let totalExpenses = 0;

// function addExpense() {
//   const expense = parseFloat(document.getElementById("expense").value);
//   if (!isNaN(expense)) {
//     totalExpenses += expense;
//     document.getElementById("totalExpenses").textContent =
//       totalExpenses.toFixed(2);
//     calculateSavings();
//   }
// }

// function addIncome() {
//   const income = parseFloat(document.getElementById("income").value);
//   if (!isNaN(income)) {
//     totalIncome += income;
//     document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
//     calculateSavings();
//   }
// }

// function calculateSavings() {
//   const savings = totalIncome - totalExpenses;
//   document.getElementById("savings").textContent = savings.toFixed(2);
// }

function addTransaction(type) {
  const amount = parseFloat(document.getElementById("transaction").value);
  if (!isNaN(amount)) {
    if (type === "income") {
      totalIncome += amount;
    } else {
      totalExpenses += amount;
    }
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
    document.getElementById("totalExpenses").textContent =
      totalExpenses.toFixed(2);
    calculateSavings();
    number.value = ""; // Clear the input field
  }
}

function calculateSavings() {
  const savings = totalIncome - totalExpenses;
  document.getElementById("savings").textContent = savings.toFixed(2);
}
