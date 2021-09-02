$(function(){

  $('.slider').slick({

    arrows: false,
    dots: true,
    slidesToShow: 1,

  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $(".menu a, footer a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  var mixer = mixitup('.gallery__content'); 

});