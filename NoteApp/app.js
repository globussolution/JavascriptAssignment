var home_container = document.getElementById("home_container")
var login_container = document.getElementById("login_container")
var email = document.getElementById("email")
var user_email = document.getElementById("user_email")
var password = document.getElementById("password")
var todo_input = document.getElementById("todo_input")
var todo_subject = document.getElementById("todo_subject")



function loginUser() {
    if (!email.value || !password.value)
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin(); 
}

function checkIsUserLogin(){
    var email = localStorage.getItem("email")
    if(email){
        home_container.style.display = "block";
        login_container.style.display = "none";
        user_email.innerText = email
    }else{
        home_container.style.display = "none";
        login_container.style.display = "block";
    }    
    displayUserTodos();
}

checkIsUserLogin();

function logout(){
    localStorage.removeItem("email");
    checkIsUserLogin();
}

function AddTodo(){
    checkIsUserLogin();
    if(todo_input.value && todo_subject.value){
        var email = localStorage.getItem("email");
        var now = new Date();
    
    var obj = {
        email : email,
        subject : todo_subject.value,
        todo : todo_input.value,
        time : now.toLocaleString()
    };
    // console.log(obj.time);
    saveValueToLocalStorage(obj);
    todo_input.value = "";
    todo_subject.value = "";
    }else{
        alert("Please Insert the Subject & Todo")
    }
}

function saveValueToLocalStorage(obj){
    var todos = localStorage.getItem("todos")
    
    if (todos) {
        todos = JSON.parse(todos);
        todos.push(obj);
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        todos = [obj];
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      displayUserTodos();
}

function displayUserTodos(){
    var list = document.getElementById("list");
    var todos = localStorage.getItem("todos");
    var currentEmail = localStorage.getItem("email");

    if(todos){
        list.innerHTML = "";
        todos = JSON.parse(todos);
        todos.forEach(function(data , ind){
            console.log(data , ind);
            if(data.email === currentEmail){
                var liElement = ` <li class="border rounded p-2 my-2 bg-blue-300">
                <p class = "text-lg font-bold">${data.subject}<span>${data.time}</span></p> 
                    <p class = "font-medium">${data.todo}</p>
                    <p>${data.email}</p>
                  </li>`;
                list.innerHTML += liElement;
            }else if(currentEmail === "admin@gmail.com"){
                var liElement = ` <li class="border rounded p-2 my-2 bg-red-300">
                <p class = "text-lg font-bold">${data.subject}<span>${data.time}</span></p> 
                    <p class = "font-medium">${data.todo}</p> 
                    <p>${data.email}</p>
                  </li>`;
                list.innerHTML += liElement;
            }
        })
    }
}
displayUserTodos();
  