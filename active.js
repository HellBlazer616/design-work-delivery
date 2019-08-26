$(window).scroll(function(e) {
	var $el = $(".fixedElement");

	if ($(this).scrollTop() > 650) {
		$el.css({ backgroundColor: "#d6f202" });
	}
	if ($(this).scrollTop() < 650) {
		$el.css({ backgroundColor: "transparent" });
	}
});
