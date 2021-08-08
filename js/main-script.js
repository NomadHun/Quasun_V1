// JavaScript Document
$(document).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("change-color");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("change-color");
    }
});

function myFunction() {
	document.getElementById("demo").innerHTML = "Paragraph changed.";
}