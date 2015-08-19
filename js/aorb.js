var windowWidth = $(window).width();

var chevronDiv = $('.chevron-div'),
	blockOne = $('#choice1'),
	blockTwo = $('#choice2');

function choose () {
	var inputOne = $('#choice1-input'),
		inputTwo = $('#choice2-input');
	if (inputOne.val().length < 1) {
		inputOne.focus();
		return false;
	}
	if (inputTwo.val().length < 1) {
		inputTwo.focus();
		return false;
	}
	chevronDiv.css({
		display: 'none'
	});
	var number = Math.floor(Math.random() * 10 + 1);
	if (number % 2 == 0) {
		blockTwo.animate({
			width: '0px'
		}, 1000, function () {
			blockTwo.css({
				display: 'none'
			})
		});
		blockOne.animate({
			width: windowWidth + 'px'
		}, 1000);
		inputOne.animate({
			fontSize: '50px'
		});
		inputOne.focus();
	} else {
		blockTwo.animate({
			width: windowWidth + 'px'
		}, 1000);
		blockOne.animate({
			width: '0px'
		}, 1000, function () {
			blockOne.css({
				display: 'none'
			})
		});
		inputTwo.animate({
			fontSize: '50px'
		});
		inputTwo.focus();
	}
}

chevronDiv.on('click', document, function () {
	choose();
})

$('.form').on('submit', document, function (e) {
	e.preventDefault();
	choose();
	return false;
});