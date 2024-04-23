document.addEventListener('DOMContentLoaded', function() {
    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue to Dashboard';
    continueButton.id = 'continueButton';
    continueButton.style.marginTop = '20px';
    document.getElementById('introduction').appendChild(continueButton);
 
 
    continueButton.addEventListener('click', function() {
        window.location.href = '/views/dashboard.html';
    });
 });
 