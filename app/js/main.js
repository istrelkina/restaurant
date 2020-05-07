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
	  fade: true,
	  prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/svg/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="../images/svg/arrow-right.svg" alt=""></button>'	  
	});

	
	$(".about__slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
		
    	$(".current_slide").text('0' + (currentSlide + 1));
	});

	$('.menu__tabs-wrapper .tab').on('click', function(event) {
	var id = $(this).attr('data-id');
		$('.menu__tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
		$('.menu__tabs-wrapper .menu__tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active-tab').fadeIn();
		return false;
	});
});