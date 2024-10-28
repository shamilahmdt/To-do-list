document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const todoList = document.getElementById('todo-list');

  // Function to create a new task item
  function createTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('flex', 'items-center', 'justify-between', 'bg-white', 'shadow', 'p-4', 'rounded-lg');

    // Task label and checkbox
    const label = document.createElement('label');
    label.classList.add('flex', 'items-center', 'space-x-3');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-checkbox', 'h-5', 'w-5', 'text-blue-500');

    const span = document.createElement('span');
    span.classList.add('text-gray-800', 'text-lg');
    span.textContent = taskText;

    // Buttons for edit and delete
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('flex', 'space-x-2');

    const editBtn = document.createElement('span');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('text-yellow-600', 'hover:text-yellow-800' , 'mr-6');

    // Delete "X" icon
    const deleteIcon = document.createElement('span');
    deleteIcon.textContent = 'X';
    deleteIcon.classList.add('text-red-500', 'cursor-pointer', 'hover:text-red-700');

    // Mark task as completed with checkbox
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        span.classList.add('line-through', 'text-gray-400');
      } else {
        span.classList.remove('line-through', 'text-gray-400');
      }
    });

    // Remove task when delete icon is clicked
    deleteIcon.addEventListener('click', () => {
      todoList.removeChild(li);
    });

    // Edit task when edit button is clicked
    editBtn.addEventListener('click', () => {
      const newTaskText = prompt('Edit your task:', span.textContent);
      if (newTaskText !== null && newTaskText.trim() !== '') {
        span.textContent = newTaskText;

        // Reset the checkbox and remove strikethrough when task is edited
        checkbox.checked = false;
        span.classList.remove('line-through', 'text-gray-400');
      }
    });

    // Append elements
    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteIcon);
    li.appendChild(buttonGroup);

    return li;
  }

  // Function to add task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = createTask(taskText);
      todoList.appendChild(taskItem);
      taskInput.value = '';  // Clear the input field after adding the task
    }
  }

  // Add task to the list when the button is clicked
  addTaskBtn.addEventListener('click', addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
