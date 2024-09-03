let display = document.getElementById('display');
let equation = '';

function appendToDisplay(value) {
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  equation = '';
  display.value = equation;
}

function calculate() {
  try {
    let result = eval(equation);
    display.value = result;
    equation = '';
  } catch (error) {
    display.value = 'Error';
  }
}