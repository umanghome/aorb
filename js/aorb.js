var windowWidth = $(window).width();

var chevronDiv = $('.chevron-div'),
	blockOne = $('#choice1'),
	blockTwo = $('#choice2');

var chosen = false;

var inputOne = $('#choice1-input'),
	inputTwo = $('#choice2-input');

function choose () {
	if (!chosen) {
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
			}, 1000);
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
			}, 1000);
			inputTwo.animate({
				fontSize: '50px'
			});
			inputTwo.focus();
		}
		chosen = true;
	} else {
		blockTwo.css({
			width: '50%'
		}, 1000);
		blockOne.css({
			width: '50%'
		}, 1000);
		inputOne.animate({
			fontSize: '36px'
		});
		inputTwo.animate({
			fontSize: '36px'
		});
		chevronDiv.css({
			display: 'flex'
		});
		inputOne.focus();
		chosen = false;
	}
}

chevronDiv.on('click', document, function (e) {
	e.preventDefault();
	choose();
})

$('.form').on('submit', document, function (e) {
	e.preventDefault();
	choose();
	return false;
});