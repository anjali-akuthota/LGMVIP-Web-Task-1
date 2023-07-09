const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-name">${taskText}</span>
      <button class="delete-button">X</button>
    `;

    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", deleteTask);

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const task = event.target.parentNode;
  taskList.removeChild(task);
}
