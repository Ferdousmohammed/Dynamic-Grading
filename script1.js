let result = document.getElementById("result");

function addToDisplay(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function equals() {
  result.value = eval(result.value);
}
