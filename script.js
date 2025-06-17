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

function clearDisplaye() {
  console.log("Clear button pressed.");

  alert("Clear button was clicked");
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

  alert("Backspace button was clicked");
}

function calculate() {
  console.log("Equals button pressed.");

  alert("Equals button was clicked");
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
