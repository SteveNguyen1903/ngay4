'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
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
	setTimeout(function () {
		$('body').css({
			'background': 'red' });
	}, 1000);

	//bài tập
	$('.item .body').hide();

	$('.item .title').on('click', function () {
		$('.item .body').hide();
		$(this).parents('.item').find('.body').show();
	});

	//if else refactor
	// b -> key, c -> value
	var nguyenApp = {
		// b : c
		ten: 'nguyen',
		tuoi: 36,
		dienthoai: ['iphone', 'samsunng', 'sony'],
		concai: [{
			tuoi: 1,
			ten: 'Heo'
		}, {
			tuoi: 2,
			ten: 'Trau'
		}, {
			tuoi: 3,
			ten: 'Bo'
		}]
	};

	console.log(nguyenApp.dienthoai[1]);
	//trong loop xài let
	for (var x = 0; x < nguyenApp.dienthoai.length; x++) {
		console.log(nguyenApp.dienthoai[x]);
	}

	//trong loop xài let
	for (var _x = 0; _x < nguyenApp.concai.length; _x++) {
		console.log(nguyenApp.concai[_x].ten);
	}
});
//# sourceMappingURL=main.js.map
