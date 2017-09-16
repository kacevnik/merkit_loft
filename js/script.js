jQuery(document).ready(function ($) {

    $("form").ajaxForm(function(){
		//$("a[title='Close']").trigger("click");
		$("form").clearForm();
		$(".fancybox-close-small").trigger("click");
		$("#modal_view_thanks").trigger("click");		
	});

  	$(".owl-carousel").owlCarousel({
  		items : 1,
  		loop:true,
  		autoplaySpeed:1200,
  		navSpeed:1200,
  		autoplay:5000,
  		nav:true,
  		navText: ['<div class="arrow_prev_owl"></div>', '<div class="arrow_next_owl"></div>']
  	});

  	$(".phone").mask("+7 (999) 999-99-99");

    $(".header_back").fancybox({
        padding     : 0,
        height      : 410,
        maxWidth    : 320,
        fitToView   : false,
        width       : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });

});