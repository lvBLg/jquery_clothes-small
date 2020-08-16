(function () {
	var clickable = true;
	$(".slider-prev").click(function () {
		if (clickable) {
			clickable = false;
			var trackLeft = parseInt($(".pro-track").css("left"));
			trackLeft += 292;
			$(".pro-track").animate(
				{ left: trackLeft + "px" },
				500,
				function () {
					if (trackLeft == 0) {
						$(".pro-track").css("left", "-876px");
					}
					clickable = true;
				}
			);
		}
	});
	$(".slider-next").click(function () {
		if (clickable) {
			var trackLeft = parseInt($(".pro-track").css("left"));
			trackLeft -= 292;
			$(".pro-track").animate(
				{ left: trackLeft + "px" },
				500,
				function () {
					if (trackLeft == -876) {
						$(".pro-track").css("left", "0px");
					}
					clickable = true;
				}
			);
		}
	});

	$(".product-slider .next").click(function () {
		$(this).attr("disabled", true);
		var currentLeft = parseInt(
			$(this).parent().prev().children().css("left")
		);
		var that = $(this);
		currentLeft -= 300;
		$(this)
			.parent()
			.prev()
			.children()
			.animate({ left: currentLeft + "px" }, 500, "linear", function () {
				if (currentLeft == -1800) {
					that.parent().prev().children().css("left", "-300px");
				}
				that.attr("disabled", false);
			});
	});

	$(".product-slider .prev").click(function () {
		$(this).attr("disabled", true);
		var currentLeft = parseInt(
			$(this).parent().prev().children().css("left")
		);
		var that = $(this);
		currentLeft += 300;
		$(this)
			.parent()
			.prev()
			.children()
			.animate({ left: currentLeft + "px" }, 500, "linear", function () {
				if (currentLeft == 0) {
					that.parent().prev().children().css("left", "-1500px");
				}
				that.attr("disabled", false);
			});
	});
})();
