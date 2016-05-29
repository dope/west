var selectors = {
    offScreen:      'off-screen',
    onScreen:       'on-screen',
    triggerActive:  'west__trigger--active'
}

var westTrigger   = document.querySelector('.west__trigger');
var westContainer = document.documentElement;

// Add off-screen to HTML by default
westContainer.classList.add(selectors.offScreen)

// Toggle menu
function closeMenu() {
    if (westContainer.classList.contains(selectors.onScreen)) {
        westContainer.classList.remove(selectors.onScreen);
        westTrigger.classList.remove(selectors.triggerActive);
    } else {
        westContainer.classList.add(selectors.onScreen);
        westTrigger.classList.add(selectors.triggerActive);
    }
}

westTrigger.addEventListener('click', closeMenu);

// Close menu with Escape Key
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
        if (westContainer.classList.contains(selectors.onScreen)) {
            closeMenu();
        }
    }
};
