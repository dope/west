 $(function () {

    $(".trigger").click(function () {
        $('.navWrap').toggleClass('open');
        $('body').toggleClass('bodyLeft');
    });


    $('.trigger').bind('touchstart', function (e) {
        $(this).trigger('click');
        e.preventDefault();
    });
});
