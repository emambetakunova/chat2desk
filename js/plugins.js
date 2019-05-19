// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$('.animate a').click(function() {
    var $target = $('#' + $(this).attr('href').split('#')[1]);
    $('body, html').animate({
        scrollTop: $target.offset().top - 60
    });
    return false;
})

// Prevent console.log from generating errors in IE for the purposes of the demo
if (!window.console) console = {
    log: function() {}
};

// The actual plugin
$('.navbar-nav').singlePageNav({
    offset: $('.single-page-nav').outerHeight(),
    filter: ':not(.external)',
    updateHash: true,
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
});



$(document).ready(function() {
    var $flexslider = $('.flexslider');
    $flexslider.flexslider({
        animation: "fade",
        manualControls: ".flex-control-nav li",
        useCSS: false /* Chrome fix*/ ,
        slideshow: true,
        directionNav: false
    });

    $(window).scroll(function() {

        if ($(window).scrollTop() >= 60) {
            $('header.navbar').addClass('docked');
        } else {
            $('header.navbar').removeClass('docked');
        }
    });
    (function() {

        $('div.accordion dt').addClass('closed');
        $('div.accordion dl dt').prepend("<span class='icon'><i class='fa fa-times-circle'></i></span>");
        $('div.accordion dl dt').prepend("<span class='iconAlt'><i class='fa fa-plus-circle'></i></span>");

        $('div.accordion dl').on('click', 'dt', function() {
            $(this).toggleClass('closed')
                .next()
                .slideToggle(200)
                .siblings('dd')
                .slideUp(200);
            $(this).siblings('dt').addClass('closed');

        });

    })();

});