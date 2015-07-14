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

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    $('.lotr').hover(function () {
        var src = $(this).attr("src");
        $(this).attr('src', $(this).attr("alt"));
        $(this).attr('alt', src);
    }).mouseout(function () {
        var alt = $(this).attr("alt");
        $(this).attr('src', $(this).attr("src"));
        $(this).attr('alt', alt);
    });

    var ratio;
    if($(window).width()>970){
        ratio = 1/3;
    }
    else if($(window).width()>700){
        ratio = 3/7
    }
    else{
        ratio = 4/5;
    }
    $('.resizeIFrame')
        .attr('width', ratio*$(window).width())
        .attr('height', (315/560)*(ratio*$(window).width()));
    $(window).resize(function () {
        console.log($(window).width());
        var ratio;
        if($(window).width()>970){
            ratio = 1/3;
        }
        else if($(window).width()>700){
            ratio = 3/7
        }
        else{
            ratio = 4/5;
        }
        $('.resizeIFrame').attr('width', ratio*$(window).width())
            .attr('height', (315/560)*(ratio*$(window).width()));
    });
});

