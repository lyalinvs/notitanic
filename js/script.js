$(document).ready(function(event){
	$('.icon-menu').click(function(event){//при клике по бургеру
		$('.icon-menu,.menu-nav').toggleClass('menu-open');
		$('body').toggleClass('lock');//при открытом меню блокируется прокрутка
	});
});

//для блока About
$(document).ready(function(){
	$('.about-content__toggle').click(function(){
		$('.about-content__text').toggleClass('hide-text');	
		if ($('.about-content__text').hasClass('hide-text')) {
			$('.about-content__toggle').html('Подробнее');
		} else {
			$('.about-content__toggle').html('Скрыть');
		}		
		return false;
	});				
});

$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".about-content__text"); 
    if(windowWidth > 768){
      elem.removeClass('hide-text');
    }
    else{
      elem.addClass('hide-text');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна
  });
});

//swiper
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	effect: 'fade',
	fadeEffect:{
		crossFade: true
	},
});