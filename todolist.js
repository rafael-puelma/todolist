const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");
addTodoInput.focus();

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});
// skappar en ny rad i HTML där vi lägger vår nya todo
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );
  // resaradd todo rutan efter att vi har lagt till ettt nytt todo
  addTodoForm.reset();
}
// tar bort todo items från listan
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
