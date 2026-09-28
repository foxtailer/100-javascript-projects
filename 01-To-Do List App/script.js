// Select by id
const buttonEl = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");

function addTodo() {
    const li = document.createElement("li");
    // Select by class
    let inputValue = document.querySelector(".input").value;

    // li.textContent = inputValue;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Cheack input validation
    if (inputValue === "") {
        alert("Please enter a valid value");
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    // Select by tag name
    document.querySelector("input").value = "";
}

buttonEl.addEventListener("click", addTodo);
