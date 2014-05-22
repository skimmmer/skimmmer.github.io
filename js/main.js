var backgrounds = [
	"images/backgrounds/IMG_0177.JPG", 
	"images/backgrounds/IMG_0197.JPG", 
	"images/backgrounds/IMG_0278.JPG", 
	"images/backgrounds/IMG_0298.JPG", 
	"images/backgrounds/IMG_0304.JPG", 
	"images/backgrounds/IMG_0313.JPG", 
	"images/backgrounds/IMG_0376.JPG", 
	"images/backgrounds/IMG_0392.JPG", 
	"images/backgrounds/IMG_0405.JPG", 
	"images/backgrounds/IMG_0409.JPG", 
	"images/backgrounds/IMG_0433.JPG"
];

$(function(){
	// Random background
	var back = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	console.log(back);
	$('#headerb').css('background-image', "url('" + back + "')");

	// Sticky header
	var shrinkHeader = 300;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('#headerb').addClass('top-header');
			$('#main').css('padding-top', 400);
		}
		else {
			$('#headerb').removeClass('top-header');
			$('#main').css('padding-top', 0);
		}
	});
	function getCurrentScroll() {
		var t = window.pageYOffset || document.documentElement.scrollTop;
		return t;
	}
});
