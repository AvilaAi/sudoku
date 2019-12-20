function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

var divNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

number = shuffle(number);

function fill() {
	number.map((num, i) => {
		const a = document.getElementsByClassName(divNumber[i]);
		for (var r = 0; r < a.length; r++) {
			a[r].innerHTML = num;
		}
	});
}
fill();

const origine = [];

function hide() {
	const p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = Math.floor(Math.random() * Math.floor(2));
		if (num !== 0) {
			p[j].style.display = 'none';
			origine.push(p[j].innerHTML);
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxlength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');

			onkeypress = 'validate(event)';
			x1.classList.add(p[j].innerHTML);
			p[j].parentNode.insertBefore(x1, p[j]);
		}
	}
}
function validate(evt) {
	var theEvent = evt || window.event;

	// Handle paste
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

hide();

const allInput = document.querySelectorAll('INPUT');

allInput.forEach((e, i) => {
	e.oninput = event => {
		if (event.target.value === e.className) {
			e.style.color = 'green';
		} else {
			e.style.color = 'red';
		}

		const result = check();
		if (result) {
			document.body.style.background = 'green';
		}
	};
});

function check() {
	var inputArray = Array.prototype.slice.call(allInput);
	const checkAll = inputArray.filter(item => {
		return item.style.color === 'green';
	});
	if (checkAll.length === inputArray.length) {
		return true;
	} else {
		return false;
	}
}
