document.addEventListener('DOMContentLoaded', fetchNotifications);

function fetchNotifications() {
    fetch('/deadlineNotifications.json')
        .then(response => response.json())
        .then(notifications => {
            displayNotifications(notifications);
        })
        .catch(error => console.error('Error fetching notifications:', error));
}

function displayNotifications(notifications) {
    const area = document.getElementById('notification-area');
    if (notifications.length > 0) {
        area.style.display = 'block'; // Show the notification area if there are notifications
    } else {
        area.style.display = 'none'; // Hide the notification area if there are no notifications
    }
    area.innerHTML = '';
    notifications.forEach(notification => {
        const div = document.createElement('div');
        div.className = 'notification';
        div.dataset.id = notification.id; 
        div.innerHTML = `
            <span class="close-btn" onclick="removeNotification(${notification.id})">&times;</span>
            <div class="notification-content">Reminder: Your deadline for ${notification.task} is coming up on ${notification.date}.</div>
        `;
        area.appendChild(div);
    });
}

function removeNotification(id) {
    const notificationToClose = document.querySelector(`.notification[data-id="${id}"]`);
    if (notificationToClose) {
        notificationToClose.remove();
    }
    const notifications = document.querySelectorAll('.notification');
    if (notifications.length === 0) {
        document.getElementById('notification-area').style.display = 'none';
    }
}
