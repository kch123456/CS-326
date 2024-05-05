let testingTask = { "name": "milestone-02", "dueDate": new Date("4/25/2024"), "status": "In progress", "description": "annoying and long" };


function show() {
    let name = testingTask.name;
    let date = testingTask.dueDate;
    let status = testingTask.status;
    let description = testingTask.description;
    document.getElementById('taskName').innerHTML = name;
    document.getElementById('dueDate').innerHTML = date;
    document.getElementById('status').innerHTML = status;
    document.getElementById('description').innerHTML = description;
}
function addToDiscussion() {
    let discussion = document.querySelector('.discussion');
    let message = document.getElementById('message');
    let section = document.createElement('p');
    section.style.border = "2px solid black";
    section.classList.add('subWrapper');
    section.innerHTML = message.value;
    discussion.appendChild(section);
    message.value = "";
}
document.getElementById('enter').addEventListener('click', function () {
    if (document.getElementById('message').value === "") {
        alert('empty input');
        return;
    }
    addToDiscussion();
    return;
});
document.getElementById('x').addEventListener('click', function () {
    window.location.href = "/homepage/homepage.html";
    return;
})
show();
