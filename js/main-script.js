// JavaScript Document
$(document).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("change-color");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("change-color");
    }
});

function myWhatsapp() {
	window.open('https://wa.me/4917674702020?text=Здравствуйте,%20я%20хотел%20бы%20узнать%20подробнее%20о%20вашей%20продукции.','_blank');}