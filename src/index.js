// document.addEventListener("DOMContentLoaded", () => {
  
// });

//event handler 
function addTaskToList (t) {
  let ul = document.querySelector("div#list ul");
  let li = document.createElement('li')
  li.textContent = t.description;
  ul.appendChild(li);
};

function handleSubmit(e) {
  e.preventDefault();
  let task = {"description": e.target.newTask.value};
  addTaskToList(task);
};

//event listener
function addListeners() {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", handleSubmit);
};

addListeners();