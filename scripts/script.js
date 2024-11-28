let screen = document.getElementById("screen");
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  screen.value = currentInput;
}

function performOperation(operator) {
  currentInput += operator;
  screen.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput); // Note: Avoid eval() for security; use safer alternatives like math.js
    screen.value = currentInput;
  } catch (e) {
    screen.value = "Error";
    currentInput = "";
  }
}

function clearScreen() {
  currentInput = "";
  screen.value = "";
}

