$(function () {

    $(".nav-btn").click(function () {
        $('body').toggleClass('is-offscreen');
    });

    $('html').on("swipeleft", function () {
        $('body').removeClass('is-offscreen');
    });

    $('html').on("swiperight", function () {
        $('body').addClass('is-offscreen');
    });

    $('.nav-btn, a').bind('touchstart', function (e) {
        $(this).trigger('click');
        e.preventDefault();
    });

    $.mobile.loading('show', {
        theme: "b",
        text: "",
        textonly: false
    });

});