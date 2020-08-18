(function () {
	$(".list-toggle a").click(function () {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".product-content>ul")
			.eq(index)
			.addClass("active")
			.siblings("ul")
			.removeClass("active");
	});
})();
