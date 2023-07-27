const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  pendingList.appendChild(taskItem);
  taskInput.value = "";
}

function completeTask(button) {
  const taskItem = button.parentNode.parentNode;
  pendingList.removeChild(taskItem);
  button.parentNode.innerHTML = "<span>Completed</span>";
  completedList.appendChild(taskItem);
}

function editTask(button) {
  const taskItem = button.parentNode.parentNode;
  const taskText = taskItem.querySelector("span").innerText;
  taskInput.value = taskText;
  pendingList.removeChild(taskItem);
}

function deleteTask(button) {
  const taskItem = button.parentNode.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}
