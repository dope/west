
$(function () {
	var menuStatus;

	$("section > h1").click(function() {
		if (menuStatus != true) {
			$("nav").show();
			$("body").animate({
				marginLeft: "250px",
			}, 200, function () {
				menuStatus = true;
			});
			return false;
		} else {
			$("body").animate({
				marginLeft: "0px",
			}, 200, function () {
				menuStatus = false;
				$("nav").hide();
			});
			return false;
		}

	});

	$('body').live("swipeleft", function () {
		if (menuStatus) {
			$("body").animate({
				marginLeft: "0px",
			}, 100, function () {
				menuStatus = false;
				$("nav").hide();
			});
		}
	});

	$('body').live("swiperight", function () {
		if (!menuStatus) {
			$("nav").show();
			$("body").animate({
				marginLeft: "250px",
			}, 200, function () {
				menuStatus = true;
			});
		}
	});


});
