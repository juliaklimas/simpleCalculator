const currentNumber = document.querySelector(".current-number");

const previousNumber = document.querySelector(".previous-number p");

const mathSign = document.querySelector(".math-sign");

const numbersButtons = document.querySelectorAll(".number");

const operatorsButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelector("button#equal");

const clearButton = document.querySelector("button#clear");

let result = "";

function displayNumbers() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNumber.innerHTML === "")
    return (currentNumber.innerHTML = "0.");

  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber.innerHTML === "") {
    return;
  }

  if (mathSign.innerHTML !== "") {
    showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}

function showResult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;

  let x = Number(currentNumber.innerHTML);
  let y = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = y - x;
      break;
    case "x":
      result = x * y;
      break;
    case "/":
      result = y / x;
      break;
    case "X^":
      result = y ** x;
      break;
    case "%":
      result = y % x;
      break;
  }

  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function clearScreen() {}

// Nasłuchiwanie przycisków

operatorsButtons.forEach((button) => button.addEventListener("click", operate));

equalButton.addEventListener("click", showResult);

clearButton.addEventListener("click", clearScreen);

numbersButtons.forEach((button) =>
  button.addEventListener("click", displayNumbers)
);
