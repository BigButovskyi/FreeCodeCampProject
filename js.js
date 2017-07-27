/**
 * Created by vlado on 25.07.2017.
 */

$("document").ready(function () {
    $("#main_well").fadeIn();

    $(window).scroll(function () {
        var top = $(window).scrollTop() / 1.3;
        $("#anim").css("transform", "rotate(" + top + "deg)");
        $("#anim").css({"margin-top": ($(window).scrollTop()) / 1.9 + "px"});

    });

});

$(window).one(function () {
    var win_bottom = $(window).scrollTop() + $(window).innerHeight();
    var $element = $('#timeline');

    if (($(window).scrollTop() < $element.offset().top) &&
        (win_bottom > $element.offset().top)) {
        console.log("fadeIn");

        $(function () {
            $element.hide().fadeIn(1000);
        });
    }
    ;
});