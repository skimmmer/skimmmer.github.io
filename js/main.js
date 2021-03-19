var backgrounds = [
	"/images/backgrounds/IMG_0177.JPG",
	"/images/backgrounds/IMG_0278.JPG",
	"/images/backgrounds/IMG_0304.JPG",
	"/images/backgrounds/IMG_0313.JPG",
	"/images/backgrounds/IMG_0392.JPG",
	"/images/backgrounds/IMG_20170826_134420.jpg",
	"/images/backgrounds/IMG_20170930_181241.jpg",
	"/images/backgrounds/IMG_20180406_102420.jpg",
	"/images/backgrounds/IMG_20180409_102440.jpg",
	"/images/backgrounds/IMG_20180810_210832.jpg",
	"/images/backgrounds/IMG_20190309_191357.jpg",
	"/images/backgrounds/IMG_20190328_161416.jpg",
	"/images/backgrounds/IMG_20190328_163623.jpg",
	"/images/backgrounds/IMG_20190626_212203.jpg",
	"/images/backgrounds/PXL_20201005_162116603.jpg",
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
