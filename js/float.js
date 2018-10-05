// JavaScript Document
$(document).ready(function() {
	//Float
	$('a#float-hide-btn').click(function(){
		if($(this).hasClass('float-show'))
		{
			$('.float-menu').css('margin-right','-112px');
			$(this).removeClass('float-show').addClass('float-hide')
		}
		else {
			$('.float-menu').css('margin-right','0px');
			$(this).removeClass('float-hide').addClass('float-show')
		}
	});
	//Hide Float
	if(window.innerWidth <= 1366)
	{$('a#float-hide-btn').click();}
	//Set CSS
	//$('.button-cumbtn-2 a').css('height',$(this).width()/2 + 'px');
	
});

function toTop() {$('html,body').animate({scrollTop: 0}, 300);}