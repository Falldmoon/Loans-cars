ymaps.ready(init);
function init() {
   var map = new ymaps.Map("map", {
      center: [55.71455517, 37.61472979],
      zoom: 15,
      controls: []
   });
   var placemark = new ymaps.Placemark([55.71460363, 37.62387076], {
      
   },{
      preset: 'islands#circleDotIcon',
      iconColor: '#1e98ff',
   });
   map.geoObjects.add(placemark);
   map.behaviors.disable('scrollZoom');
}
$(document).ready(function () {
	$('.header-menu').on('click', function() {
		$('.modal-window').addClass('modal-active')
		$('.modal-window').addClass('modal-trn')
	})
	$('.modal-exit').on('click', function() {
		$('.modal-window').removeClass('modal-active')
		function showMessage() {
		    $('.modal-window').removeClass('modal-trn')
		}
		let element = $('.modal-trn')[0];
		element.addEventListener("transitionend", showMessage, false);
	})

	$(".tab-item").not(":first").hide();
	$(".tab-wrapper .tab").click(function() {
	    $(".tab-wrapper .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
	    $(".tab-item").hide().eq($(this).index()).fadeIn(600)
	}).eq(0).addClass("tab-active");
	$('.reviews-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.arrows_l'),
		nextArrow: $('.arrows_r'),
		responsive: [
		    {
		    
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	})

	$('.input-price').rangeslider({
	    polyfill : false,
	    onInit : function() {
	    	$('#count-number').text(this.$element.val())
	    },
	    onSlide : function( position, value ) {
	        $('#count-number').text(this.$element.val())
	    }
	});
	$('.input-month').rangeslider({
	    polyfill : false,
	    onInit : function() {
	    	$('#count-month').text(this.$element.val())
	    },
	    onSlide : function( position, value ) {
	        $('#count-month').text(this.$element.val())
	    }
	});
	$('.questions-wrapper').on('click', function() {
		$(this).toggleClass('questions-active')
		return false;
	})
	$('.slider-wrapper').slick({
		slidesToShow: 1,
		prevArrow: $('.arrows_l-c'),
		nextArrow: $('.arrows_r-c'),
	})
	$('.input-phone').mask('+7 (999) 999-99-99')
	let count = 0
	$('.loans-btn').on('click',function() {
		$('.loans').toggleClass('loans-active')
		if (count == 1) {
			count = 0
			this.innerHTML = 'Развернуть'
		}
		else{
			count = 1
			this.innerHTML = 'Свернуть'
		}
		return false;
	})
	let counter = 0
	$('.loans-btn-c').on('click',function() {
		$('.section-text').toggleClass('loans-active')
		if (counter == 1) {
			counter = 0
			this.innerHTML = 'Развернуть'
		}
		else{
			counter = 1
			this.innerHTML = 'Свернуть'
		}
		return false;
	})
});

