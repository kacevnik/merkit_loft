jQuery(document).ready(function ($) {

	$('h1').each(function(index, el) {
		$(this).find('.h1_1').width(($(this).outerWidth(true)-$(this).find('.h1_2').outerWidth(true))/2-20);
		$(this).find('.h1_3').width(($(this).outerWidth(true)-$(this).find('.h1_2').outerWidth(true))/2-20);
	});

	$('#link_call_back').click(function() {
		$('#call_back input[name="data"]').val('Длина: '+$('#size_table input[name="long"]').val()+' Ширина: '+$('#size_table input[name="width"]').val()+' Высота: '+$('#size_table input[name="height"]').val()+' Тип стола: '+$('#size_table select[name="title_table"]').val())
	});

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

  	$("[data-fancybox]").fancybox({
  		padding: '300px'
	});

  	$('input[name="phone"]').mask("+7 (999) 999-99-99");

});