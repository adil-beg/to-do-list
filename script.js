const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
}












