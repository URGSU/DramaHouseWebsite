/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var hgt = $(window).height();
$(".hosted-events").css("height", hgt)

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var isFirst = true;

if(isFirst) {
// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('button.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 130
            }, 500, 'easeInOutExpo');
            event.preventDefault();
            isFirst = false;
        });
    });
}

$('#allMembers').on('hidden.bs.collapse', function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('button.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 130
            }, 500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});
$('#allMembers').on('shown.bs.collapse', function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('button.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $('#members').offset().top
            }, 500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    //lord of the rings photo
    $('.lotr').hover(function () {
        if($(this).attr("alt")) {
            var src = $(this).attr("src");
            $(this).attr('src', $(this).attr("alt"));
            $(this).attr('alt', src);
        }
    }).mouseout(function () {
        if($(this).attr("alt")) {
            var alt = $(this).attr("alt");
            $(this).attr('src', $(this).attr("src"));
            $(this).attr('alt', alt);
        }
    });
});


