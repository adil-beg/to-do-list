# Notes for JavaScript File of To-Do-List Project

const addButton = document.getElementById('addButton');
- This line gets the HTML element with the ID "addButton" and assigns it to the constant variable 'addButton'.
- This element represents the "Add Task" button.
##
const taskInput = document.getElementById('taskInput');
- This line gets the HTML element with the ID "taskInput" and assigns it to the constant variable 'taskInput'.
- This element represents the input field where users can enter a new task.
##
const taskList = document.getElementById('taskList');
- This line gets the HTML element with the ID "taskList" and assigns it to the constant variable 'taskList'. 
- This element represents the unordered list where the tasks will be displayed.
##
addButton.addEventListener('click', addTask);
- This line adds a "click" event listener to the "Add Task" button ('addButton').
- When the button is clicked, the addTask function will be called.
##
taskList.addEventListener('click', removeTask);
- This line adds a "click" event listener to the task list ('taskList').
- When a list item within the task list is clicked, the 'removeTask' function is called.
##
function addTask() {...}
- This is the declaration of the 'addTask' function.
- This function is called when the "Add Task" button is clicked.
##
const taskText = taskInput.value.trim();
- This line gets the value of the task input field ('taskInput') and removes any leading or trailing white spaces using the 'trim()' function.
  - The cleaned text is stored in the 'taskTest' variable.
##
if (taskText !== '') {...}
- This line checks if the 'taskText' variable contains any text.
  - I.e. if the user has entered a non- empty task.
##
const taskItem = document.createElement('li');
- This line creates a new 'li' (list item) element using the 'document.createElement()' method and assigns it to the 'taskItem' variable.
##
taskItem.textContent = taskText; 
- This line sets the text content of the newly created list item ('taskItem') to the value of 'taskText'.
##
taskList.appendChild(taskItem);
- This line appends the newly created list item ('taskItem') as a child to the task list ('tasklist').
##
taskInput.value = '';
- This line resets the value of the task input field to an empty string, clearing the input field after adding a task.
##
function removeTask(event) {...}
- This is the declaration of the 'removeTask' function.
- This function is called when a list item within the task list is clicked.
##
if (event.target.tagname === 'Li') {...}
- This line checks if the element that triggered the click event ('event.target') is a list item ('li') element.
##
event.target.remove();
- If the clocked element is a list item, this line removes the clicked list item from the task list.


