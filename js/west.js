$body = $('body');
$trig = $('.trigger');

$(function () {
    $trig.click(function () {
        $('.navWrap').toggleClass('open');
        $body.toggleClass('bodyLeft');
        return false;
    });
    $trig.bind('touchstart', function (e) {
        $(this).trigger('click');
        e.preventDefault();
    });
    $body.click(function (event) {
        if (!$(event.target).closest('.navWrap').length) {
            $('.navWrap').removeClass('open');
            $body.removeClass('bodyLeft');
        }
    });
});