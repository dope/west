$(function () {
    var menuStatus;

    $(".nav-btn").click(function () {
        if (menuStatus !== true) {
            $(".slideWrap").show();
            $(".slideWrap, body").animate({
                marginLeft: "250px"
            }, 100, function () {
                menuStatus = true;
            });
            return false;
        } else {
            $(".slideWrap, body").animate({
                marginLeft: "0px"
            }, 100, function () {
                menuStatus = false;
                $(".slideWrap").hide();
            });
            return false;
        }

    });

    $('html').on("swipeleft", function () {
        if (menuStatus) {
            $("body, .slideWrap").animate({
                marginLeft: "0px"
            }, 0, function () {
                menuStatus = false;
                $(".slideWrap").hide();
            });
        }
    });

    $('html').on("swiperight", function () {
        if (!menuStatus) {
            $(".slideWrap").show();
            $("body, .slideWrap").animate({
                marginLeft: "250px"
            }, 0, function () {
                menuStatus = true;
            });
        }
    });

    $('.nav-btn, a').bind('touchstart', function (e) {
        $(this).trigger('click');
        e.preventDefault();
    });

});