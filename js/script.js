$(document).ready(function(event){
	$('.icon-menu').click(function(event){//при клике по бургеру
		$('.icon-menu,.menu-nav').toggleClass('menu-open');
		$('body').toggleClass('lock');//при открытом меню блокируется прокрутка
	});
});

$(document).ready(function(event){
	$('.about-content__spoiler').click(function(event){
		$('.about-content__text--spoiler').toggleClass('open-text');
		$('.about-content__spoiler').html('(Скрыть)');
	});
});