let sumEl = document.getElementById("sum-el");

function add() {
  let in1 = parseFloat(document.getElementById("num1").value);
  let in2 = parseFloat(document.getElementById("num2").value);
  let res = in1 + in2;
  sumEl.textContent = "Result: " + res;
}

function sub() {
  let in1 = parseFloat(document.getElementById("num1").value);
  let in2 = parseFloat(document.getElementById("num2").value);
  let res = in1 - in2;
  sumEl.textContent = "Result: " + res;
}

function mul() {
  let in1 = parseFloat(document.getElementById("num1").value);
  let in2 = parseFloat(document.getElementById("num2").value);
  let res = in1 * in2;
  sumEl.textContent = "Result: " + res;
}

function div() {
  let in1 = parseFloat(document.getElementById("num1").value);
  let in2 = parseFloat(document.getElementById("num2").value);
  let res = in1 / in2;
  sumEl.textContent = "Result: " + res;
}
