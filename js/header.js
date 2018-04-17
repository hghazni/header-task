// requirejs import of jquery
define(['jquery'], function($){
    
/*===============================
Desktop Dropdown Menu
================================*/
$(document).ready(function() {
    // Hides menu(s) on document load
    $(".dropnav__wrapper").hide();
    $(".mobile-menu__wrapper").hide();
        // Hides Mobile Overlay background
        $(".mobile-menu__overlay").hide();
    // Hides Products Menu
    $(".mobilemenu__products--open").hide();
        
    // Toggles the dropdown menu
    $(".menu-item:nth-of-type(1)").mouseenter(function(){
        $('.dropnav__wrapper').delay(70).stop( true ).fadeToggle().toggleClass('active');
    });

    // If mouse leaves dropdown nav wrapper it hides it
    $(".dropnav__wrapper").mouseleave(function(){
        $(".dropnav__wrapper").delay(70).stop( true ).fadeOut().toggleClass('active');
    })

    // If mouse enters the header hide the dropdown menu
    $('.header__centrebar').mouseenter(function(){
        $('.dropnav__wrapper').delay(70).stop( true ).fadeOut().toggleClass('active');
    });

    /* Prevent Right Click from hiding the dropdown. Mouse leave is being triggered due to a Chrome bug. Right click is being disabled on the dropdown menu for now (not a great solution). 
    
    At http://selcobw.com you can see the same bug cancelling the dropdown menu there too but it's slightly more delayed.*/ 
    $( ".dropnav__wrapper" ).on("contextmenu",function(){
        return false;
     }); 
});

/*===============================
Mobile Menu
================================*/
$(".header__centrewrapper--menu").click(function() {
    $(".mobile-menu__wrapper").toggle();
    $(".mobile-menu__overlay").fadeIn();// Overlay Fade In
    $(".mobclose").toggle(); 
    $(".mobile-menu__wrapper").toggleClass("active");
})

// Close Button
$(".mobile-menu__close").click(function() {
    $(".mobile-menu__wrapper").toggle();
    $(".mobile-menu__overlay").fadeOut(); // Overlay Fade
    $(".mobclose").toggle();
    $(".mobile-menu__wrapper").removeClass("active");
})

// Close Overlay On Click
$(".mobile-menu__overlay").click(function(){
    $(".mobile-menu__wrapper").toggle();
    $(".mobile-menu__overlay").fadeOut(); // Overlay Fade
    $(".mobclose").toggle();
    $(".mobile-menu__wrapper").removeClass("active");
});

// Products Button
$(".mob-products").click(function() {
    $(".mobilemenu__products--open").toggle();
    $(".col.caret").toggleClass("active");
    $(".col.caret a").toggleClass("active");
})

}); // <-- requirejs wrapper