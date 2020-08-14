$(".icon-Search").click(function () {
	$(".search-input").toggleClass("w860");
	$(this).siblings().children("input").toggleClass("iptactive");
});

$(".cart").click(function () {
	$(this).toggleClass("cart-bgc");
	$(".cart-content").toggleClass("conactive");
});

$(".brand-control .next").click(function () {
	$(this).attr("disabled", true);
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
	var that = $(this);
	currentLeft -= 194;
	$(this)
		.parent()
		.prev()
		.children()
		.animate({ left: currentLeft + "px" }, 500, "linear", function () {
			if (currentLeft == -776) {
				that.parent().prev().children().css("left", "0px");
			}
			that.attr("disabled", false);
		});
});

$(".brand-control .prev").click(function () {
	$(this).attr("disabled", true);
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
	var that = $(this);
	currentLeft += 194;
	$(this)
		.parent()
		.prev()
		.children()
		.animate({ left: currentLeft + "px" }, 500, "linear", function () {
			if (currentLeft == 0) {
				that.parent().prev().children().css("left", "-776px");
			}
			that.attr("disabled", false);
		});
});
