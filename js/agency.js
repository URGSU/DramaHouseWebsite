/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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
    var that;
    var src;
    var alt;
    var jumpScareTimeout;

    //lord of the rings photo
    $('.lotr').mouseenter(function() {
        that = $(this);
        src = that.attr('src');
        alt = that.attr('alt');

        if(alt){
            that.attr('src', alt);
            that.attr('alt', src);
        }

        if(that.hasClass('jump-scare')){
            jumpScareTimeout = setTimeout(function () {
                that.attr('src', 'img/build/team/jump-scare.jpg');
            }, 3000);
        }
    }).mouseout(function() {
        clearTimeout(jumpScareTimeout);
        that.attr('src', src);
        that.attr('alt', alt);
    });
});


