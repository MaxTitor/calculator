// Nice of the princess to invite us over for a picnic, eh, Luigi?
// I hope she made lotsa spaghetti!
// Luigi! Look! 
//   |
//   v

// DOM variables
let calcButtons = document.querySelectorAll(".calculator-button");
let display = document.querySelector("body > table:nth-child(2) > tbody > tr > td > div > p");

// Click event
for (let i = 0; i < calcButtons.length; i++) {
	calcButtons[i].addEventListener("click", function(){
		let clickedButton = this.innerHTML;
		calculator(clickedButton);
	})
}

// Calculator stuff starts here. Don't ask me what all this stuff does, not even God knows
let displayCache = 0;
let userInputNumber = 0;
let userInputOperator = "";
let firstNumber = 0;
let secondNumber = 0;
let equationStep = 0;
function calculator (userInput) {
	let initialNumber = Number(display.innerHTML);
	
	if (equationStep === 0) {
		// My apologies, I searched through all of stackoverflow to see if there was a better way of doing this but I couldn't find anything
		if (initialNumber === 0 && userInput !== "÷" && userInput !== "x" && userInput !== "-" && userInput !== "+" && userInput !== "=" && userInput !== "C") {
			userInputNumber = userInput;
		} else if (userInput !== "÷" && userInput !== "x" && userInput !== "-" && userInput !== "+" && userInput !== "=" && userInput !== "C") {
			userInputNumber = userInputNumber + userInput;
		} else if (initialNumber > 0) {
			if (userInput === "-" || userInput === "+" || userInput === "÷" || userInput === "x") {
				userInputOperator = userInput;
				firstNumber = Number(userInputNumber);
				userInputNumber = "";
				equationStep++;
			}
		} 
	}
	
	if (equationStep === 1) {
		if (initialNumber === 0 && userInput !== "÷" && userInput !== "x" && userInput !== "-" && userInput !== "+" && userInput !== "=" && userInput !== "C") {
			userInputNumber = userInput;
		} else if (userInput !== "÷" && userInput !== "x" && userInput !== "-" && userInput !== "+" && userInput !== "=" && userInput !== "C") {
			userInputNumber = userInputNumber + userInput;
		} else if (userInput === "=") {
			secondNumber = Number(userInputNumber);
			let answer = operate(userInputOperator, firstNumber, secondNumber);
			userInputNumber = answer;
			displayCache = answer;
			equationStep = 0;
		}
	}
	
	if (userInput === "C") {
		userInputNumber = 0;
		userInputOperator = "";
		displayCache = 0;
	}

	if (userInput !== "÷" && userInput !== "x" && userInput !== "-" && userInput !== "+" && userInput !== "=" && userInput !== "C") {
		displayCache = userInputNumber;
	}

	display.innerHTML = displayCache;
}

// Operators
function add (input1, input2) {
	return input1 + input2;
}

function substract (input1, input2) {
	return input1 - input2;
}

function multiply (input1, input2) {
	return input1 * input2;
}

function divide (input1, input2) {
	return input1 / input2;
}

// Operate
function operate (operator, num1, num2) {
	if (operator === "+") {
		const addition = add(num1, num2);
		return addition;
	} else if (operator === "-") {
		const substraction = substract(num1, num2);
		return substraction;
	} else if (operator === "x") {
		const multiplication = multiply(num1, num2);
		return multiplication;
	} else if (operator === "÷") {
		const divition = divide(num1, num2);
		return divition;
	} else {
		return "Error"
	}
}