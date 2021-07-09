var currentInput = "";
var storedInput = "";
var result = "";
var operator = "";

// add numbers to screen
function input(num) {
  currentInput += num;
  updateDisplay(currentInput);
  document.getElementById("keyequals").textContent = "=";
}

// update display
function updateDisplay(toShow) {
  document.getElementById("input-display").textContent = toShow;
}

// add
function keyAdd() {
  storedInput = Number(currentInput) + Number(storedInput);
  currentInput = "";
  operator = "+";
}

// subtract
function keySub() {
  storedInput = Number(currentInput) + Number(storedInput);
  currentInput = "";
  operator = "-";
}

// multiply
function keyMul() {
  storedInput = Number(currentInput) + Number(storedInput);
  currentInput = "";
  operator = "x";
}

//divide
function keyDiv() {
  storedInput = Number(currentInput) + Number(storedInput);
  currentInput = "";
  operator = "/";
}

// equal
function keyEquals() {
  switch (operator) {
    case "+":
      {
        result = storedInput + Number(currentInput);
      }
      break;
    case "/":
      {
        result = storedInput / Number(currentInput);
      }
      break;
    case "x":
      {
        result = storedInput * parseInt(currentInput);
      }
      break;
    case "/":
      {
        result = storedInput / parseInt(currentInput);
      }
      break;
  }
  currentInput = "";
  storedInput = "";
  updateDisplay(`${result}`);
}
