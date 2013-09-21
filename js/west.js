$(function () {

    $(".trigger").click(function () {
        $('.navWrap').toggleClass('open');
    });

    $('html').on("swiperight", function () {
        $('.navWrap').removeClass('open');
    });

    $('html').on("swipeleft", function () {
        $('.navWrap').addClass('open');
    });

    $('.trigger').bind('touchstart', function (e) {
        $(this).trigger('click');
        e.preventDefault();
    });

    $.mobile.loading('show', {
        theme: "b",
        text: "",
        textonly: false
    });

});

