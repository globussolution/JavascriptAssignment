function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById("todoList");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      todoList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = "";
  }
}

document.getElementById("todoInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
