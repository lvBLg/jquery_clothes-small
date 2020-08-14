$(".product-slider .next").click(function () {
	$(this).attr("disabled", true);
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
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
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
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

$(".blog-control .prev").click(function () {
	$(this).attr("disabled", true);
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
	var that = $(this);
	currentLeft += 585;
	$(this)
		.parent()
		.prev()
		.children()
		.animate({ left: currentLeft + "px" }, 500, "linear", function () {
			if (currentLeft == 0) {
				that.parent().prev().children().css("left", "-1755px");
			}
			that.attr("disabled", false);
		});
});

$(".blog-control .next").click(function () {
	$(this).attr("disabled", true);
	var currentLeft = parseInt($(this).parent().prev().children().css("left"));
	var that = $(this);
	currentLeft -= 585;
	$(this)
		.parent()
		.prev()
		.children()
		.animate({ left: currentLeft + "px" }, 500, "linear", function () {
			if (currentLeft == -2340) {
				that.parent().prev().children().css("left", "-585px");
			}
			that.attr("disabled", false);
		});
});

$(".product-ops i").mouseover(function () {
	$(this).css("transform", "scale(1.5)");
});
$(".product-ops i").mouseout(function () {
	$(this).css("transform", "scale(1)");
});

// 模态框
$(".icon-eye").click(function () {
	$(".product-modal").fadeIn();
	$(document.body).css("overflowY", "hidden");
});

$(".modal-close").click(function () {
	$(".product-modal").fadeOut();
	$(document.body).css("overflowY", "auto");
});

var index = 0;
$(".product-modal .tabs").on("click", "li", function () {
	$(this).addClass("active").siblings().removeClass("active");
	index = $(this).index();
	$(this)
		.parent()
		.next()
		.children()
		.eq(index)
		.addClass("active")
		.siblings()
		.removeClass("active");
});

$(".modal-img .img-tabs").on("click", "li", function () {
	$(this).addClass("active").siblings().removeClass("active");
	index = $(this).index();
	$(this)
		.parent()
		.prev()
		.children()
		.eq(index)
		.addClass("active")
		.siblings()
		.removeClass("active");
});
