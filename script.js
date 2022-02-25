function display(value) {
  document.querySelector('#displayValue').value += value
}

function operation() {
  let x = document.querySelector('#displayValue').value
  let result = eval(x)
  document.querySelector('#displayValue').value = result
}

function clr() {
  document.querySelector('#displayValue').value = ''
}
