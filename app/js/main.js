$(function(){

	$('.slider').slick({
	  autoplay: true,
	  arrows:true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  centerMode: true,
	  centerPadding: '60px'
  	  //variableWidth: true
	});

	$('.header__menu-burger').on('click',function(){
        $('.menu-dropdown').addClass('active');
        
    });

    $('.menu-dropdown__close').on('click',function(){
       $('.menu-dropdown').removeClass('active');
        
    });

    $('.header__menu-burger').mouseover(function(){
        $('.header__menu-burger').children().css('background-color','#208769');
        
    });

    $('.header__menu-burger').mouseout(function(){
        $('.header__menu-burger').children().css('background-color','#fff');
        
    });

    $('.about__slider').slick({
	  autoplay: true,
	  arrows:true,	  
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 800,
	  fade: true	  
	});

	//let currentSlide = $('.about__slider')).slick('slickCurrentSlide') + 1;
	$(".about__slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
		//let currentSlide = currentSlide + 1;
    	$(".current_slide").text('0' + (currentSlide + 1));
	});

});