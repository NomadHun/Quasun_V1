// JavaScript Document
const header = document.querySelector('header')


window.onscroll = function(){
	var top = window.scrollY;
	if (top>=50){
		header.classList.add('active')
	}else{
		header.classList.remove('active');
	}
} 
	
	


function myWhatsapp() {
	window.open('https://wa.me/4917674702020?text=Здравствуйте,%20я%20хотел%20бы%20узнать%20подробнее%20о%20вашей%20продукции.','_blank');}