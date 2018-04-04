/*===============================
Desktop Dropdown Nav Functionality
================================*/
$(document).ready(function() {
    // Hides the menu on document load
    $(".dropdown-nav__wrapper").hide();

    // Toggles the dropdown menu
    $(".menu__item:nth-of-type(2)").mouseenter(function(){
        $('.dropdown-nav__wrapper').delay(70).fadeToggle();
    });

    // If mouse leaves dropdown nav wrapper it hides it
    $(".dropdown-nav__wrapper").mouseleave(function(){
        $(".dropdown-nav__wrapper").delay(70).fadeOut();
    })
});