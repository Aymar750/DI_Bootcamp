const tasks = [];

const addTask = () => {
  // Get the task text from the input field
  const taskText = document.getElementById('task').value;
  
  // Check if the input is not empty
  if (taskText) {
    // Create a new task object with a unique task_id, the task text, and a default value of false for the done property
    const newTask = {
      task_id: tasks.length,
      text: taskText,
      done: false
    };
    
    // Add the new task to the tasks array
    tasks.push(newTask);
    
    // Clear the input field
    document.getElementById('task').value = '';
    
    // Add the task to the DOM
    const taskList = document.querySelector('.listTasks');
    taskList.innerHTML += `
      
        <div class= "box" data-task-id=${newTask.task_id}>
            <button class="delete-button"><i class="fa fa-times"></i></button>
            <input type="checkbox" id="task${newTask.task_id}"/>
            <label for="task${newTask.task_id}">${newTask.text}</label>
        </div>
      
    `;
  }
}

const doneTask = (e) => {
  // Get the task element that was clicked
  const taskElement = e.target.parentNode;
  
  // Get the task_id of the task from the data-task-id attribute
  const taskId = taskElement.getAttribute('data-task-id');

  // Find the corresponding task in the tasks array
  const task = tasks.find(task => task.task_id == taskId);
  // Toggle the done property of the task
  task.done = !task.done;
  
  // Update the task element in the DOM
  if (task.done) {
    taskElement.classList.add('checked');
  } else {
    taskElement.classList.remove('checked');
  }
}

const deleteTask = (e) => {
  // Get the task element that was clicked
  const taskElement = e.target.parentNode;
  
  // Get the task_id of the task from the data-task-id attribute
  const taskId = taskElement.getAttribute('data-task-id');
  
  // Find the index of the corresponding task in the tasks array
  const taskIndex = tasks.findIndex(task => task.task_id == taskId);
  
  // Remove the task from the tasks array
  tasks.splice(taskIndex, 1);
  
  // Remove the task element from the DOM
  taskElement.remove();
}

// Add event listeners for the add, done, and delete buttons
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

document.querySelector('.listTasks').addEventListener('click', (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
      doneTask(event);
    }else if (event.target.classList.contains("delete-button")) {
      deleteTask(event);
    }
  });

