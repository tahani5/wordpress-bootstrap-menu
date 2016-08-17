$(document).ready(function(){
			$('.wordpress-bootstrap-menu ul.nav li a').on('click', function(event) {
				if($(window).width() < 768){
					if(!$(this).parent().hasClass('dropdown open'))
					event.preventDefault(); 
					event.stopPropagation(); 
					$(this).parent().siblings().removeClass('dropdown open');
					$(this).parent().toggleClass('dropdown open');
					$(this).next('ul').toggleClass('dropdown-menu');
				}
			});
		});