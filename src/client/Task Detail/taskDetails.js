document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input[type="date"]').addEventListener('change', function() {
        console.log('Date changed to: ' + this.value);
    });

    const taskNameInput = document.getElementById('taskName');
    taskNameInput.addEventListener('blur', function() {
        if (!this.value.trim()) {
            alert('Task name cannot be empty.');
        }
    });
});

document.getElementById('editCategoryBtn').addEventListener('click', function() {
    // Make the input box editable
    document.getElementById('categoryInput').removeAttribute('readonly');
    // Show action buttons
    document.getElementById('saveCategoryBtn').style.display = 'inline-block';
    document.getElementById('addCategoryBtn').style.display = 'inline-block';
    document.getElementById('removeCategoryBtn').style.display = 'inline-block';
    // Show the category list
    document.getElementById('categoryList').style.display = 'block';
    this.style.display = 'none'; // Hide edit button
});

document.getElementById('saveCategoryBtn').addEventListener('click', function() {
    // Make the input box readonly again
    document.getElementById('categoryInput').setAttribute('readonly', true);
    // Hide action buttons
    this.style.display = 'none';
    document.getElementById('addCategoryBtn').style.display = 'none';
    document.getElementById('removeCategoryBtn').style.display = 'none';
    // Hide the category list
    document.getElementById('categoryList').style.display = 'none';
    // Show edit button again for future edits
    document.getElementById('editCategoryBtn').style.display = 'inline-block';
    alert('Category "' + document.getElementById('categoryInput').value + '" has been saved to categorize the task.');
});

document.getElementById('addCategoryBtn').addEventListener('click', function() {
    const newCategoryName = document.getElementById('categoryInput').value.trim();
    if (newCategoryName) {
        const categoryList = document.getElementById('categoryList');
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.textContent = newCategoryName;
        categoryItem.onclick = function() {
            document.getElementById('categoryInput').value = this.textContent;
        };
        categoryList.appendChild(categoryItem);
        document.getElementById('categoryInput').value = ''; // Optionally clear the input after adding
    } else {
        alert('Please enter a category name.');
    }
});

document.getElementById('removeCategoryBtn').addEventListener('click', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.onclick = function() {
            if (confirm('Are you sure you want to delete this category?')) {
                this.remove();
            }
        };
    });
});
