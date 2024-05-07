function openPanel(taskName, taskDate, taskDescription) {
    document.getElementById('taskName').value = taskName;
    document.getElementById('dueDate').value = taskDate;
    document.getElementById('addedOn').value = new Date().toISOString().slice(0, 10); // Example for added date
    document.getElementById('taskDetailsPanel').classList.add('open');
}

function closePanel() {
    document.getElementById('taskDetailsPanel').classList.remove('open');
}

document.getElementById('editCategoryBtn').addEventListener('click', function () {
    var section = document.getElementById('categoryEditSection');
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addNewCategoryBtn').addEventListener('click', function () {
        var newCategoryName = document.getElementById('newCategoryName').value.trim();
        if (newCategoryName) {
            const existingCategories = document.querySelectorAll('.category-item span.name');
            const isDuplicate = Array.from(existingCategories).some(category => category.textContent === newCategoryName);

            if (!isDuplicate) {
                var div = document.createElement('div');
                div.className = 'category-item';
                div.style.backgroundColor = getRandomLightColor();

                var spanName = document.createElement('span');
                spanName.className = 'name';
                spanName.textContent = newCategoryName;
                div.appendChild(spanName);

                var checkMark = document.createElement('span');
                checkMark.className = 'check-mark';
                checkMark.textContent = '✔';
                checkMark.style.visibility = 'hidden'; // Initially hidden
                div.appendChild(checkMark);

                var removeBtn = document.createElement('button');
                removeBtn.textContent = ' x';
                removeBtn.className = 'remove-btn';
                removeBtn.style.marginLeft = '10px';
                removeBtn.onclick = function (event) {
                    event.stopPropagation(); // Prevent toggling selection when removing
                    div.remove();
                };
                div.appendChild(removeBtn);

                div.onclick = function () {
                    var checkMark = this.querySelector('.check-mark');
                    if (checkMark.style.visibility === 'hidden') {
                        checkMark.style.visibility = 'visible';
                        this.classList.add('selected');
                    } else {
                        checkMark.style.visibility = 'hidden';
                        this.classList.remove('selected');
                    }
                };

                document.getElementById('existingCategories').appendChild(div);
            } else {
                alert('This category has already been added.');
            }
        }
        document.getElementById('newCategoryName').value = '';
    });

    document.getElementById('applyCategoriesBtn').addEventListener('click', function () {
        const selectedItems = document.querySelectorAll('.category-item.selected');
        const categoryContainer = document.getElementById('selectedCategories');
        categoryContainer.innerHTML = '';

        selectedItems.forEach(item => {
            const bubble = document.createElement('div');
            bubble.className = 'category-bubble';
            bubble.textContent = item.querySelector('.name').textContent;
            bubble.style.backgroundColor = item.style.backgroundColor; // Retain the background color of the selected category
            categoryContainer.appendChild(bubble);
        });

        document.getElementById('categoryEditSection').style.display = 'none';
    });
});

function getRandomLightColor() {
    var letters = 'BCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
