// Data for demonstration
const tasks = [
    { id: 1, title: 'Design Interface', description: 'Design the main interface of the application.', dueDate: '2024-04-30' },
    { id: 2, title: 'Implement Feature X', description: 'Implement the X feature as discussed in the requirements.', dueDate: '2024-05-15' },
    // Add more tasks as needed
];

// Renders the tasks in the task list
function renderTasks() {
    const taskListElem = document.getElementById('task-list');
    taskListElem.innerHTML = ''; // Clear out the current list

    // Iterate through tasks and create task elements
    tasks.forEach(task => {
        const taskItemElem = document.createElement('div');
        taskItemElem.classList.add('task-item');
        taskItemElem.innerHTML = `
            <h3 class="task-title">${task.title}</h3>
            <p class="task-due-date">Due: ${task.dueDate}</p>
        `;
        taskItemElem.onclick = function () { showTaskDetails(task); };
        taskListElem.appendChild(taskItemElem);
    });
}

// Shows the details of a clicked task
function showTaskDetails(task) {
    const taskDetailsElem = document.getElementById('task-details');
    taskDetailsElem.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due date: ${task.dueDate}</p>
    `;
    taskDetailsElem.style.display = 'block';
}

// Handles adding a new task from the form submission
document.getElementById('add-task-form').onsubmit = function (event) {
    event.preventDefault();

    // Retrieve the form values
    const newTask = {
        id: tasks.length + 1, // Simple ID assignment for example purposes
        title: document.getElementById('task-name').value,
        description: document.getElementById('task-desc').value,
        dueDate: document.getElementById('task-due-date').value
    };

    // Add the new task and re-render the list
    tasks.push(newTask);
    renderTasks();

    // Clear the form
    this.reset();
};

// Initial call to render tasks on load
document.addEventListener('DOMContentLoaded', renderTasks);
