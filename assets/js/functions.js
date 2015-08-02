$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("animated");
    $('.logo').addClass("animated img");
  }
  else{
    $('header').removeClass("animated");
    $('.logo').removeClass("animated img");
  }
});

$(function() {
	smoothScroll(300);
	});
	
	// smoothScroll function is applied from the document ready function
	
	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {
			
			var target = $( $(this).attr('href') );
			
			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, duration);
			}
		});
	}
