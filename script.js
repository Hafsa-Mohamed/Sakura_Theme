/*global $, console, SmoothScroll, jQuery, alert, prompt, confirm*/
/*jsline plusplus: true*/
/*evil: true*/

$(function () {
    'use strict';
    $(".home-left h1").fitText(0.4, {
    });
    $(".home-right h2").fitText(1, {
        minFontSize: '30px',
        maxFontSize: '60px'
    });
    $(".home-right .para").fitText(1, {
        minFontSize: '20px',
        maxFontSize: '40px'
    });
    $(".faq h1, .about-us .smal").fitText(1, {
        minFontSize: '40px',
        maxFontSize: '60px'
    });
    $(".about-us h1").fitText(1, {
        minFontSize: '45px',
        maxFontSize: '60px'
    });
    

    
    $('.carousel').carousel({ //للسلايدر
        interval: 5000 //زمن التبديل بين الصور
    });
    
    //smooth scroll
    var scrollB = new SmoothScroll(' a[href*="#learnmore"]', {
	        speed: 900,
	        offset: 197,
	        easing: 'easeInOutCubic'
        }),
        scrollButton = $("#scroll-top"); //cache scroll top
    
    $(".contact-us .color-star i").on("click", function () {
        $(this).removeClass("fa-star-o").addClass("fa-star").css("color", "yellow");
        if ($(".color-star i").hasClass("fa-star")) {
            $(this).on("click", function () {
                $(this).removeClass("fa-star").addClass("fa-star-o").css("color", "#fff");
            });
        }
    });
    
    
     //the scroll top element is caching above
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(700); //scrollButton is caching above
        } else {
            scrollButton.fadeOut(700);
        }
    });
    
     //click on button to scroll up 
    scrollButton.on("click", function () {
        $("body, html").animate({scrollTop: 0}, 900);
    });
});

//loading screen
$(window).on("load", function () {
    'use strict';
    
    $(".cssload-container .cssload-circle-1").fadeOut(2000, function () { //put the parent on callback function to make it creative
        $("body").css("overflow", "auto"); //show the scroll
        
        $(this).parent().fadeOut(2400, function () {
            $(this).remove(); //it most remove to remove from html
        });
    
    });
});





