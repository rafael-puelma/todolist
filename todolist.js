console.log("hej");

const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");
addTodoInput.focus();

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form is submitted");

  addTodo(addTodoInput.value);
});

function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );

  addTodoForm.reset();
}
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
