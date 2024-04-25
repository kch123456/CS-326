let currentDate = new Date();
let tasksData = {}; 

document.addEventListener('DOMContentLoaded', function () {
    renderCalendar(currentDate);
});

function toggleAddTask() {
    const addTaskForm = document.getElementById('add-task-form');
    if (addTaskForm.style.display === 'none') {
        addTaskForm.style.display = 'block';
    } else {
        addTaskForm.style.display = 'none';
    }
}


function openPanel(taskId, event) {
    const taskData = tasksData[taskId];
    const panel = document.getElementById('taskDetailsPanel');

    document.getElementById('taskName').value = taskData.taskName;
    document.getElementById('dueDate').value = taskData.taskDate;
    document.getElementById('addedOn').value = new Date().toISOString().slice(0, 10);
    loadCategories(taskData.categories);

    panel.style.top = `${event.clientY + window.scrollY + 10}px`;
    panel.style.left = `${event.clientX + 10}px`;
    panel.style.display = 'block';
}

function loadCategories(categories) {
    const categoriesContainer = document.getElementById('selectedCategories');
    categoriesContainer.innerHTML = ''; // Clear previous categories
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoryElement.className = 'category-bubble';
        categoriesContainer.appendChild(categoryElement);
    });
}

function closePanel() {
    document.getElementById('taskDetailsPanel').style.display = 'none';
}
function addTask(event) {
    event.preventDefault();

    // Get values from form fields
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-due-date').value;
    const taskDescription = document.getElementById('task-desc').value;

    // Clear the form
    document.getElementById('add-task-form').reset();

    //Flo added
    const taskID = Date.now();

    // Create the task element
    const taskElement = document.createElement('div');
    taskElement.className = 'task-info';
    taskElement.innerHTML = `
        <span class="task-marker"></span>
        <span>${taskName}</span> - <span>${taskDescription}</span>
    `;
    //Flo added
    taskElement.onclick = (event) => openPanel(taskID, event);
    tasksData[taskID] = {
        taskName,
        taskDate,
        taskDescription,
        categories: [] // Initialize with empty categories array
    };


    // Assuming the date is in the format "YYYY-MM-DD"
    const dateParts = taskDate.split('-');
    const dueDay = parseInt(dateParts[2], 10);

    // Find the calendar day to add the task to and append the task
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        if (parseInt(day.textContent, 10) === dueDay) {
            day.appendChild(taskElement);
        }
    });
}



function renderCalendar(date) {
    const daysContainer = document.querySelector('.days');
    daysContainer.innerHTML = ''; // Clear existing calendar days

    // Assuming 30 days in a month for the example
    // Adjust the startingDayIndex based on what day the month starts
    const startingDayIndex = 0; // Sunday = 0, Monday = 1, ..., Saturday = 6
    const totalDays = 30;

    // Add empty days for the first row of the calendar if the month doesn't start on a Sunday
    for (let i = 0; i < startingDayIndex; i++) {
        const emptyDayElement = document.createElement('div');
        emptyDayElement.className = 'calendar-day empty';
        daysContainer.appendChild(emptyDayElement);
    }

    // Add actual days of the month
    for (let i = 1; i <= totalDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = i;
        daysContainer.appendChild(dayElement);
    }

    // Add empty days for the last row of the calendar if the month doesn't end on a Saturday
    const remainingDays = (7 - ((startingDayIndex + totalDays) % 7)) % 7;
    for (let i = 0; i < remainingDays; i++) {
        const emptyDayElement = document.createElement('div');
        emptyDayElement.className = 'calendar-day empty';
        daysContainer.appendChild(emptyDayElement);
    }

    const monthYearDisplay = document.getElementById('calendar-month-year');
    monthYearDisplay.textContent = getMonthYearString(date);
}

function changeMonth(delta) {
    // Change the month by the given delta
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar(currentDate);
}

function getMonthYearString(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

