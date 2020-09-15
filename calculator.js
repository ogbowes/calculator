let display = document.querySelector('#result');
// Initially set as empty strings to check for extra decimal points later
let firstNumber = '';
let secondNumber = '';
let numberButtons =  document.querySelectorAll('.number');
let errorStatement = 'LOL math go brrr';
for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener('click', (e) => {
		if (operator && !secondNumber) {
			clearScreen();
		}
		if (display.innerText == errorStatement) {
			clearEverything();
		}
		// Display number currently being punched in
		display.innerText += e.srcElement.innerText;
		// If operator is present, user is punching in second number
		if (operator) {
			secondNumber = display.innerText;
		}
		// Otherwise, they must be entering the first number
		else {
			firstNumber = display.innerText;
		}
	})
}

let operationButtons = document.querySelectorAll('.operator');
let operator = '';
for (let i = 0; i < operationButtons.length; i++) {
	operationButtons[i].addEventListener('click', (e) => {
		// Check if either number has more than one decimal point before continuing
		if (firstNumber.split('.').length > 2 || secondNumber.split('.').length > 2) {
			displayError();
		}

		// Perform arthimetic on the two numbers and "slide"  the result to the first
		// number variable to continue the calculation
		if (secondNumber) {
			if (secondNumber == '0' && operator == 'divide') {
				displayError();
			}
			else {
				firstNumber = operate(+firstNumber, +secondNumber, operator);
				display.innerText = firstNumber;
				secondNumber = '';
			}
		}
		operator = e.srcElement.name;
	})
}

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
	clearEverything();
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
		// First number is the result of whatever operation was completed
		case "equals" :
			return a;
	}
}

function clearScreen() {
	display.innerText = '';
}

function clearEverything() {
	firstNumber = '';
	secondNumber = '';
	operator = '';
	clearScreen();
}

function displayError() {
	display.innerText = errorStatement;
}