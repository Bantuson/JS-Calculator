// Reference display element
const display = document.getElementById("display");

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
  console.log("Button pressed:", value);

  let currentValue = display.value;

  if (justCalculated && !isNaN(value)) {
    display.value = value;
    justCalculated = false;
    return;
  }

  //if current display shows 0 and user enter's number we wanna replace the 0
  if (currentValue === "0" && !isNaN(value)) {
    display.value = value;
  }

  // if user enters decimal while current display is 0, keep the 0
  else if (currentValue === "0" && value === ".") {
    display.value = currentValue + value;
  } else {
    display.value = currentValue + value;
  }

  // Reset the JustCalculated flag when user starts typing
  justCalculated = false;

  console.log("display updated to: ", display.value);
}

function clearDisplay() {
  console.log("Clear button pressed.");
  display.value = "0";
  justCalculated = false;
}

function deleteLast() {
  console.log("Backspace button pressed.");

  let currentValue = display.value;

  // if theres only one character or its 0, reset to 0
  if (currentValue.length <= 1 || currentValue === "0") {
    display.value = "0";
  } else {
    display.value = currentValue.slice(0, -1);
  }
}

function calculate() {
  console.log("Equals button pressed.");

  try {
    let expression = display.value;

    // Prevent calculation if display is empty or just 0
    if (!expression || expression === "0") {
      return;
    }

    // Check for division by zero
    if (expression.includes("/0")) {
      display.value = "Error";
      justCalculated = true;
      return;
    }

    // Use Function constructor as safer alternative to eval
    const result = Function('"use strict"; return (' + expression + ')')();

    // Check if result is valid
    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }

    justCalculated = true;
  } catch (error) {
    console.error("Calculation error:", error);
    display.value = "Error";
    justCalculated = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Calculator loaded successfully");
  console.log("Display elemt, display");

  if (display) {
    console.log("Current display value");
  } else {
    console.log("Display elemnt not found");
  }
});
