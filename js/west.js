// Variables
var trigger     = '.js-trigger';
var menu        = '.js-menu';
var menuFly     = 'site-menu--fly';
var bodyFly     = 'body--fly';

// Functions
function slideWest() {
    $(menu).toggleClass(menuFly);
    $(document.body).toggleClass(bodyFly);
}

function escWest() {
    $(menu).removeClass(menuFly);
    $(document.body).removeClass(bodyFly);
}

// Main fly out.
$(trigger).on('click', function() {
    slideWest();
});


// Esc Key, hide menu.
$(document).keydown(function(e) {
    if(e.keyCode == 27) {
        escWest();
    }
});