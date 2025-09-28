CSS 
const toggleButton = document.getElementById('toggle-button');  
const content = document.getElementById('content');
toggleButton.addEventListener('click', () => {
    content.classList.toggle('hidden');
    if (content.classList.contains('hidden')) {
        toggleButton.textContent = 'Show Content';
    } else {
        toggleButton.textContent = 'Hide Content';
    }
});
