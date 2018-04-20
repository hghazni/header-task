// requirejs import of jquery
define(['jquery'], function($){
    
/*===============================
Desktop Dropdown Menu
================================*/
$(document).ready(function() {
    // Toggles the dropdown menu
    $(".menu-item:nth-of-type(1)").mouseenter(function(){
        $('.dropnav-wrapper').delay(70).stop( true ).fadeToggle().toggleClass('active');
    });

    // If mouse leaves dropdown nav wrapper it hides it
    $(".dropnav-wrapper").mouseleave(function(){
        $(".dropnav-wrapper").delay(70).stop( true ).fadeOut().toggleClass('active');
    });

    // If mouse enters the header hide the dropdown menu
    $('.header__centrebar').mouseenter(function(){
        $('.dropnav-wrapper').delay(70).stop( true ).fadeOut().toggleClass('active');
    });

    /* Prevent Right Click from hiding the dropdown. Mouse leave is being triggered due to a Chrome bug. Right click is being disabled on the dropdown menu for now (not a great solution). 
    
    At http://selcobw.com you can see the same bug cancelling the dropdown menu there too but it's slightly more delayed.*/ 
    $( ".dropnav-wrapper" ).on("contextmenu",function(){
        return false;
     }); 
});

/*===============================
Mobile Menu
================================*/
$(".header__centrewrapper--menu").click(function() {
    $(".mobile-menu-wrapper").toggle();
    $(".mobile-menu-overlay").fadeIn();// Overlay Fade In
    $(".mobclose").toggle(); 
    $(".mobile-menu-wrapper").toggleClass("active");
});

// Close Button
$(".mobile-menu-close-btn").click(function() {
    $(".mobile-menu-wrapper").toggle();
    $(".mobile-menu-overlay").fadeOut(); // Overlay Fade
    $(".mobclose").toggle();
    $(".mobile-menu-wrapper").removeClass("active");
});

// Close Overlay On Click
$(".mobile-menu-overlay").click(function(){
    $(".mobile-menu-wrapper").toggle();
    $(".mobile-menu-overlay").fadeOut(); // Overlay Fade
    $(".mobclose").toggle();
    $(".mobile-menu-wrapper").removeClass("active");
});

// Products Button
$(".navitem.products").click(function() {
    $(".mobilemenu-products-open").toggleClass('active');
    $(".col.caret").toggleClass("active");
    $(".col.caret a").toggleClass("active");
});

}); // <-- requirejs wrapper