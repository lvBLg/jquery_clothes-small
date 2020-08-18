(function () {
	$(".cat-name .arrow").click(function () {
		if ($(this).parent().next().css("display") === "none") {
			$(".cat-tree").hide("bind");
			$(".arrow span").css("transform", "translateY(0px) rotate(0deg)");
			$(this).parent().next().show("bind");
			$(this)
				.children("span")
				.css("transform", "translate(-5px, 5px) rotate(90deg)");
		} else {
			$(this).parent().next().hide("bind");
			$(this)
				.children("span")
				.css("transform", "translateY(0px) rotate(0deg)");
		}
	});
})();
