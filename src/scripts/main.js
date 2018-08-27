// // Main
$(document).ready(function () {


	// //Lab
	// //prepend
	// $(".abc").prepend("11111")
	// //append (thêm vào phía sau)

	// //text  lấy nội dung text
	// //html  lấy html

	// //before  thêm ngoài đằng trước, after thêm bên ngoài class phía sau 
	// // hide, show

	// // :not
	// $("ul li:not(.active)").remove()

	// //addClass, removeClass
	// $("ul li:not(.active)").addClass("abcfew")

	// //toggle  nếu chưa có class thì thêm, có rồi thì xóa
	// $("ul li:not(.active)").toggleClass("abcfew")

	// //parents 
	// //find
	// //on  click,hover

	// //length  hàm đếm
	// $("ul li").length


	// //hàm if
	// $("ul li.active").html().length > 0 ? $(this).html("1111") : $(this).html("2222222")

	// //lấy chiều cao và chiều rộng tổng height width
	// $('p').height()

	// // đặt link mẫu ko bị rớt hạng SEO
	// // a(href="javascript:void(0); hehe()")

	// // css
	// $('ul li.value').css({
	// 	"background":"red",
	// 	"color":"white"
	// })

	// // data attribute
	// // li.item.value(data-name="heo")
	// $('ul li').attr("class")

	// // viết vòng lặp
	// // this nên để trong syntax jquery để tránh bị hiểu lầm
	// $('li.item').each(function(){
	// 	console.log($(this))
	// })

	// $('li.item').each(function(){
	// 	if($(this).attr("data-name" === 'nguyen'))
	// 	{
	// 		$(this).css({
	// 			"background":"red"
	// 		})
	// 	}
	// })

	//setTimeout là delay thời gian chỉ xảy ra 1 lần
	//setInterval là chạy hoài
	setTimeout(function(){
		$('body').css({
			'background' : 'red'})
		}, 1000);

	//bài tập
	$('.item .body').hide()

	$('.item .title').on('click', function(){
		$('.item .body').hide()
		$(this).parents('.item').find('.body').show()
	})


	//if else refactor
	// b -> key, c -> value
	var nguyenApp = {
		// b : c
		ten: 'nguyen',
		tuoi: 36,
		dienthoai: ['iphone', 
					'samsunng', 
					'sony'
		],
		concai: [
			{
				tuoi: 1,
				ten: 'Heo',
			},
			{
				tuoi: 2,
				ten: 'Trau',
			},
			{
				tuoi: 3,
				ten: 'Bo',
			}
		]
	}

	console.log(nguyenApp.dienthoai[1])
	//trong loop xài let
	for(let x=0; x<nguyenApp.dienthoai.length; x++) {
		console.log(nguyenApp.dienthoai[x])
	}

	//trong loop xài let
	for(let x=0; x<nguyenApp.concai.length; x++) {
		console.log(nguyenApp.concai[x].ten)
	}


});
