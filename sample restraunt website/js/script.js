// here we are using jquery function $
$(function() { // same as document.addEventListner("DOMContentLoaded..")

    //same as document.querySelector("#navbarToggle").addEventListner("blur",...)
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    }); // this function hides the button when we loose focus
});