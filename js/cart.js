(function () {
	// process
	$(".process-tabs").on("click", "li", function () {
		let index = $(this).index();
		$(this).siblings().removeClass("active");
		$(this).addClass("active").prevAll().addClass("active");
		$(".process-items>li")
			.siblings()
			.removeClass("active")
			.eq(index)
			.addClass("active");
	});

	//购物车

	let choiceNum = 0;
	let allFlag = false;
	let goodsNum = $(".table-content").children().length;

	/* 单件商品数量 */
	function acount(obj) {
		return obj
			.parent()
			.next()
			.children(".total")
			.html(
				(
					obj.siblings(".num").html() *
					obj.parent().prev().children("span").html()
				).toFixed(2)
			);
	}

	/* 商品总价 */
	function sum() {
		let totalPrice = 0;
		$(".table-content .choice").each(function () {
			totalPrice +=
				$(this).parent().siblings().eq(2).children(".total").html() - 0;
		});
		console.log(totalPrice);
		console.log($(".table-content .choice").length);
		$(".pay-info .total-price").html(totalPrice);
	}

	sum();

	/* 商品加减 */
	$(".sub").click(function () {
		let num = $(this).siblings(".num").html();
		if (num === "1") {
			return $(this).siblings(".num").html(num);
		}
		$(this)
			.siblings(".num")
			.html(--num);
		acount($(this));
		sum();
	});

	$(".plus").click(function () {
		let num = $(this).siblings(".num").html();
		$(this)
			.siblings(".num")
			.html(++num);
		acount($(this));
		sum();
	});

	/* 选中商品 */
	$(".select").click(function () {
		let boo = $(this).attr("class").indexOf("choice");

		if (boo != -1) {
			$(this).removeClass("choice");
			choiceNum--;
		} else {
			$(this).addClass("choice");
			choiceNum++;
		}

		if (choiceNum == goodsNum) {
			$(".select-all").addClass("choice");
			allFlag = true;
		} else {
			$(".select-all").removeClass("choice");
			allFlag = false;
		}
		sum();
	});
	/* 全选 */
	$(".select-all").click(function () {
		if (!allFlag) {
			$(this).addClass("choice");
			$(".select").addClass("choice");
			choiceNum = goodsNum;
		} else {
			$(this).removeClass("choice");
			$(".select").removeClass("choice");
			choiceNum = 0;
		}
		allFlag = !allFlag;
		sum();
	});
	/* 移除商品 */
	$(".remove").click(function () {
		let selected = $(this)
			.siblings()
			.eq(0)
			.children(".select")
			.attr("class")
			.indexOf("choice");
		$(this).parent().remove();
		choiceNum = selected != -1 ? --choiceNum : choiceNum;
		goodsNum--;
		if (goodsNum == choiceNum && choiceNum != 0) {
			$(".select-all").addClass("choice");
		}
		sum();
	});
})();
