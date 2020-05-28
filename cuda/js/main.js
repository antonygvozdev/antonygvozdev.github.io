$(document).ready(function () {
    $(window).resize(function () {
        breakpoints();
    });
    function breakpoints() {
        if ($(window).width() <= 575) {
            if (!$('.nav__btn').hasClass('.nav__btn_active')) {
                $('.nav').hide();
            }
        } else {
            $('.nav').show();
        }
    }
    $('.nav__btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('nav__btn_active');
        if ($(this).hasClass('nav__btn_active')) {
            $('.nav').slideDown();
        } else {
            $('.nav').slideUp();
        }
    });
    var progressTop = $('.skills').offset().top - 300;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > progressTop){
            $('.progress-bar').circleProgress({
                startAngle: -Math.PI/2,
                size: 120
            });
            $(window).bind('scroll')
            $('.progress-bar-first').circleProgress({
                value: 0.9,
                fill: {
                    color: ['#30bae7']
                }
            });
            $('.progress-bar-second').circleProgress({
                value: 0.75,
                fill: {
                    color: ['#d74680']
                }
            });
            $('.progress-bar-third').circleProgress({
                value: 0.7,
                fill: {
                    color: ['#15c7a8']
                }
            });
            $('.progress-bar-fourth').circleProgress({
                value: 0.85,
                fill: {
                    color: ['#eb7d4b']
                }
            });
            $(window).unbind('scroll');
        }
    })
    $('a[href^="#"]').on('click', function(e){
        var _href = $(this).attr('href')
        $('html, body').animate({ scrollTop: $(_href).offset().top + "px"});
        return false
    });
});