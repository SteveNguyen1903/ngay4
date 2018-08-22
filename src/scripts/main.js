// // Main
$(document).ready(function () {
// 	// Home slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	});


	//Clients slider
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		items:1,
		responsive:{
			480:{
				items:3,
			},
			768:{
				items:4,
			},
			992:{
				items:6,
			}
		}
	})

})
