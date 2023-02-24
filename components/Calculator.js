// Select all the elements from the DOM
const outputPreviousOperand = document.querySelector('[data-previous-operand]');
const outputCurrentOperand = document.querySelector('[data-current-operand]');
const buttonsAllClear = document.querySelector('[data-all-clear]');
const buttonsDelete = document.querySelector('[data-delete]');
const buttonsNumbers = document.querySelectorAll('[data-number]');
const buttonsOperations = document.querySelectorAll('[data-operation]');
const buttonsEquals = document.querySelector('[data-equals]');

// Initialize the calculator
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Add an event listener to each number button
buttonsNumbers.forEach(button => {
  button.addEventListener('click', () => {
    addNumber(button.textContent);
    updateDisplay();
  });
});

// Add an event listener to each operation button
buttonsOperations.forEach(button => {
  button.addEventListener('click', () => {
    setOperation(button.textContent);
    updateDisplay();
  });
});

// Add an event listener to the equals button
buttonsEquals.addEventListener('click', () => {
  compute();
  updateDisplay();
  window.navigator.vibrate(200);
});

// Add an event listener to the all-clear button
buttonsAllClear.addEventListener('click', () => {
  clear();
  updateDisplay();
});

// Add an event listener to the delete button
buttonsDelete.addEventListener('click', () => {
  deleteNumber();
  updateDisplay();
});

// Add a number to the current operand
export function addNumber(number) {
  if (currentOperand === 'MathError') currentOperand = ''
  if (number === '.' && currentOperand.includes('.')) return;
  if (number === '-' && currentOperand === '') {
    currentOperand = '-';
    return;
  }
  if (number === '-' && currentOperand !== '' && previousOperand === '') {
    currentOperand = '-' + currentOperand;
    return;
  }
  currentOperand += number;
}

// Set the operation
export function setOperation(op) {
  if (currentOperand === 'MathError') currentOperand = ''
  if (currentOperand === '' && op != '-') return;
  if (currentOperand === '' && op == '-')
    currentOperand = '-';
  console.log(currentOperand)
  if (currentOperand !== '-') {
    compute();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
  }
}

// Compute the result
export function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  if (computation === Infinity) computation = 'MathError'
  console.log(computation)
  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
}

// Clear the calculator
export function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
}

// Delete a number from the current operand
export function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
}

// Update the display
export function updateDisplay() {
  outputCurrentOperand.textContent = currentOperand;
  outputPreviousOperand.textContent = previousOperand;
  if (operation != null) {
    outputPreviousOperand.textContent += ' ' + operation;
  }
}