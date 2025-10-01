// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById("display");
  //parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
updateDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input( )
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call updateDisplay() at the end to refresh the screen!
 */
function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  // Your code here
  // Use if statements to check what type of input was received
  // Then call the appropriate helper function
  // you may need to use parseFloat
  if (
    input === "1" ||
    input === "2" ||
    input === "3" ||
    input === "4" ||
    input === "5" ||
    input === "6" ||
    input === "7" ||
    input === "8" ||
    input === "9" ||
    input === "0"
  ) {
    handleNumber(input);
    console.log("this is a number");
  }
  if (input === "+" || input === "-" || input === "*" || input === "/") {
    handleOperator(input);
    console.log("this is an operator");
  }
  if (input === ".") {
    handleDecimal();
    console.log("this is a decimal");
  }
  if (input === "=") {
    executeOperation();
  }
  if (input === "C") {
    resetCalculator();
  }
  // Don't forget to call updateDisplay() at the end!
}

// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"

// Arithmetic functions
function add(x, y) {
  let sum = x + y;
  console.log(`${x} + ${y} = ${sum}`);
  return sum;
}

function subtract(x, y) {
  let difference = x - y;
  console.log(`${x} - ${y} = ${difference}`);
  return difference;
}

function multiply(x, y) {
  let product = x * y;
  console.log(`${x} * ${y} = ${product}`);
  return product;
}

function divide(x, y) {
  let quotient = x / y;
  if (y === 0) {
    console.log(`Error: you can't divide by zero.`);
  } else {
    console.log(`${x} / ${y} = ${quotient}`);
    return quotient;
  }
}

//Essential State Variables
let displayValue = "";
let firstOperand = "";
let operator = "";
let shouldResetDisplay = false;

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */
function handleNumber(number) {
  // Your code here
  // This function should update the displayValue
  // Consider: Are we starting fresh? Continuing a number?
  if (!displayValue) {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay(displayValue);
}

/**
 * Handles decimal point input
 */
function handleDecimal() {
  // Your code here
  // Make sure you don't add multiple decimal points to one number
  if (displayValue.includes(".")) {
    console.log("Error: You can only have one decimal in your number.");
    return;
  }
  displayValue += ".";
  updateDisplay(displayValue);
}

/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */
function handleOperator(nextOperator) {
  // Your code here
  // Store the first number and operator
  // Prepare for the second number input
  operator = nextOperator;
  firstOperand = displayValue;
  displayValue = "";
}

/**
 * Executes the calculation when = is pressed
 */
function executeOperation() {
  // Your code here
  // Use if/else statements to call the right operation function
  // Handle the result and any errors
  console.log(`${firstOperand} ${operator} ${displayValue}`);
  if (operator === "+") {
    updateDisplay(add(parseFloat(firstOperand), parseFloat(displayValue)));
  }
  if (operator === "-") {
    updateDisplay(subtract(parseFloat(firstOperand), parseFloat(displayValue)));
  }
  if (operator === "*") {
    updateDisplay(multiply(parseFloat(firstOperand), parseFloat(displayValue)));
  }
  if (operator === "/") {
    updateDisplay(divide(parseFloat(firstOperand), parseFloat(displayValue)));
  }
}

/**
 * Resets the calculator (C button)
 */
function resetCalculator() {
  // Your code here
  // Reset all state variables and display
  operator = "";
  displayValue = "";
  firstOperand = "";
  updateDisplay(0);
}
