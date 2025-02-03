$(document).ready(function(event){
	$('.icon-menu').click(function(event){//при клике по бургеру
		$('.icon-menu,.menu-nav').toggleClass('menu-open');
		$('body').toggleClass('lock');//при открытом меню блокируется прокрутка
	});
});