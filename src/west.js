var westTrigger   = document.querySelector('.west__trigger');
var westContainer = document.documentElement;

// Add off-screen to HTML by default
westContainer.classList.add('off-screen')

// Toggle menu
function toggleMenu() {
    westContainer.classList.toggle('on-screen');
    westTrigger.classList.toggle('west__trigger--active');
}

westTrigger.addEventListener('click', toggleMenu);
