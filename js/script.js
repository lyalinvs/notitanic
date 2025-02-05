$(document).ready(function(event){
	$('.icon-menu').click(function(event){//при клике по бургеру
		$('.icon-menu,.menu-nav').toggleClass('menu-open');
		$('body').toggleClass('lock');//при открытом меню блокируется прокрутка
	});
});

$(document).ready(function(event){
	$('.spoller__title').click(function(event){ // при клике в блоке about me на маленьких экранах где текст
		$(this).toggleClass('openAbout').next().slideToggle(300);
	})
})