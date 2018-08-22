// // Main
// $(document).ready(function () {
// 	// Phần Slider
// 	$('.home-slider .owl-carousel').owlCarousel({
// 		items: 1,
// 		nav: false,
// 		dots: true,
// 		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
// 	});
// 	// Phần Clients
	// $('.home-clients .owl-carousel').owlCarousel({
	// 	items: 1,
	// 	nav: true,
	// 	dots: false,
	// 	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	// 	responsive: {
	// 		// breakpoint from 480 up
	// 		480: {
	// 			items: 2,
	// 		},
	// 		// breakpoint from 768 up
	// 		768: {
	// 			items: 4,
	// 		},
	// 		// breakpoint from 992 up
	// 		992: {
	// 			items: 6,
	// 		}
	// 	}
	// });


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
