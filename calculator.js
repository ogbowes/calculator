let display = document.querySelector('#result');
let numberButtons = document.querySelectorAll('.number');

for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener('click', (e) => {
		display.innerText += e.srcElement.innerText;
	})
}

let operationButtons = document.querySelectorAll('.operator');
let operation = '';
for (let i = 0; i < operationButtons.length; i++) {
	operationButtons[i].addEventListener('click', (e) => {
		console.log(e.srcElement.name);
	})
}

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
	display.innerText = '';
})

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, b, operator) {
	switch (operator) {
		case "add":
			return add(a, b);
		case "subtract":
			return subtract(a, b);
		case "multiply":
			return multiply(a, b);
		case "divide":
			return divide(a, b);
	}
}