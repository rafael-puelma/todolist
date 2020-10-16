console.log("hej");

const addTodoForm = document.querySelector("#addTodoForm");
// console.log(addTodoForm);

const addTodoInput = document.querySelector("#addTodoInputField");

const todoList = document.querySelector("#todoList");
// focus on text input
//document.getElementById("myText").focus();

addTodoInput.focus();
// inte ""document.getElementById("myText").focus();"" eftersom vi ahr redan functionen addtodo

// add event listenr for submitting form.
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form is submitted");
  // console.log(addTodoInput.value);
  addTodo(addTodoInput.value);
});
// funktionen lägger till ett item till på listan
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

// implementing daddEventListener("click", function(){
// add event listenr for submitting form.
// document.getElementById("todoList").addEventListener("click", function(){
// console.log("det gick")
// });

// dedta är först inlämings uppgiften

// uppgift 2 är miniräknare
// använd function eval
