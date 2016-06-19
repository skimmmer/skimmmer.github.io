var backgrounds = [
	"/images/backgrounds/IMG_0177.JPG",
	"/images/backgrounds/IMG_0197.JPG",
	"/images/backgrounds/IMG_0278.JPG",
	"/images/backgrounds/IMG_0298.JPG",
	"/images/backgrounds/IMG_0304.JPG",
	"/images/backgrounds/IMG_0313.JPG",
	"/images/backgrounds/IMG_0376.JPG",
	"/images/backgrounds/IMG_0392.JPG",
	"/images/backgrounds/IMG_0405.JPG",
	"/images/backgrounds/IMG_0409.JPG",
	"/images/backgrounds/IMG_0433.JPG",
	"/images/backgrounds/IMG_1424.JPG",
	"/images/backgrounds/IMG_1453.JPG",
	"/images/backgrounds/IMG_1555.JPG",
	"/images/backgrounds/IMG_1596.JPG",
	"/images/backgrounds/IMG_1656.JPG",
	"/images/backgrounds/IMG_1702.JPG",
	"/images/backgrounds/IMG_1712.JPG",
	"/images/backgrounds/IMG_1720.JPG",
	"/images/backgrounds/IMG_1759.JPG",
	"/images/backgrounds/IMG_1780.JPG",
	"/images/backgrounds/IMG_1835.JPG",
	"/images/backgrounds/IMG_20160608_194509.jpg"
];

$(function(){
	// Random background
	var back = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	console.log(back);
	$('#headerb').css('background-image', "url('" + back + "')");

	// Sticky header
	var shrinkHeader = window.innerHeight * 0.4 - 100;

	$(window).resize(function() {
		shrinkHeader = window.innerHeight * 0.4 - 100;
		scrollCheck();
	});

	$(window).scroll(function() {
		scrollCheck();
	});

	function getCurrentScroll() {
		var t = window.pageYOffset || document.documentElement.scrollTop;
		return t;
	}
	function scrollCheck() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('#headerb').addClass('top-header');
			$('#headerb').css('background-position', '0 -' + shrinkHeader + 'px');
			$('#main').css('padding-top', window.innerHeight * 0.4);
		}
		else {
			$('#headerb').removeClass('top-header');
			$('#headerb').css('background-position', '0 0');
			$('#main').css('padding-top', 0);
		}
	}


	var fb_box = [];
	$('a[rel]').each(function() {
		var cl = $(this).attr('class').split(' ')[0];
		if (fb_box.indexOf(cl) < 0) {
			$('.'+cl).fancybox({openEffect:'none', closeEffect:'none'});
			fb_box.push(cl);
		}
	});
});
