document.addEventListener("DOMContentLoaded", () => {
//event handlers
function addTaskToList (t) {
  let ul = document.querySelector("div#list ul");
  let li = document.createElement('li')
  const deleteBtn = document.createElement('button');

  li.textContent = t
  deleteBtn.textContent = 'done'

  ul.appendChild(li);

  deleteBtn.addEventListener("click", handleDelete);
  li.appendChild(deleteBtn);

};

function handleSubmit(e) {
  e.preventDefault();
  let task = e.target["new-task-description"].value;
  addTaskToList(task)
  e.target.reset()
};

function handleDelete(e) {
  e.target.parentElement.remove();
};

//event listeners
document.querySelector("#create-task-form").addEventListener("submit", handleSubmit);

});

