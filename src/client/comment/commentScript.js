let testingTask = {"name":"milestone-02","dueDate": new Date("4/25/2024"),"status":"in progress","description":"annoying and long"};


 function show(){
let name = testingTask.name;
let date = testingTask.dueDate;
let status = testingTask.status;
let description = testingTask.description;
document.getElementById('taskName').innerHTML = name;
document.getElementById('dueDate').innerHTML = date;
document.getElementById('status').innerHTML = status;
document.getElementById('description').innerHTML = description;
}
function addToDiscussion(){
let discussion = document.querySelector('.discussion');
let message = document.getElementById('message').value;
let section = document.createElement('p');
section.classList.add('subWrapper');
section.innerHTML = message;
discussion.appendChild(section);
}
document.getElementById('enter').addEventListener('click', function(){
    addToDiscussion();
    return;
});
show();
