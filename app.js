//Operation Buttons
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector('#mul')
const divBtn = document.querySelector('#div')
const equBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clear')
const val = document.querySelector('#value')

//Number Buttons
const oneBtn = document.querySelector('#one')
const twoBtn = document.querySelector('#two')
const threeBtn = document.querySelector('#three')
const fourBtn = document.querySelector('#four')
const fiveBtn = document.querySelector('#five')
const sixBtn = document.querySelector('#six')
const sevenBtn = document.querySelector('#seven')
const eightBtn = document.querySelector('#eight')
const nineBtn = document.querySelector('#nine')
const zeroBtn = document.querySelector('#zero')

//Values
let numStr1 = ""
let numStr2 = ""
let operation = ''
let ifOperate = false
let total;

function add(num1, num2) {
  return num1+num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


function operate(operator, num1, num2) {
  if (operator == 'add') {
    return add(num1, num2)
  }
  else if (operator == 'subtract') {
    return subtract(num1,num2)
  }
  else if (operator == 'multiply') {
    return multiply(num1, num2)
  }
  else if (operator = 'divide') {
    return divide(num1, num2)
  }
}

//Button Listeners for +, - , * , /
addBtn.addEventListener('click', function() {
  operation = 'add'
  ifOperate = true
})
subBtn.addEventListener('click', function() {
  operation = 'subtract'
  ifOperate = true
})
mulBtn.addEventListener('click', function() {
  operation = 'multiply'
  ifOperate = true
})
divBtn.addEventListener('click', function(){
  operation = 'divide'
  ifOperate = true
})
equBtn.addEventListener('click', function() {
  total = operate(operation, parseInt(numStr1), parseInt(numStr2))
  value.innerHTML = total
  numStr1 = "" + total
  numStr2 = ""
})
clearBtn.addEventListener('click', function() {
  numStr1 = ""
  numStr2 = ""
  ifOperate = false
  value.innerHTML = 0
  console.log(numStr1)
  console.log(numStr2)
})

//Button Listeners for 0,1,2,3,4,5,6,7,8,9
oneBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '1'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '1'
    value.innerHTML = numStr2;
  }
  //console.log(numStr1)
  //console.log(numStr2)
})

twoBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '2'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '2'
      value.innerHTML = numStr2;
  }
})

threeBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '3'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '3'
      value.innerHTML = numStr2;
  }
})
fourBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '4'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '4'
    value.innerHTML = numStr2;
  }
})
fiveBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '5'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '3'
    value.innerHTML = numStr2;
  }
})
sixBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '6'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '6'
    value.innerHTML = numStr2;
  }
})
sevenBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '7'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '7'
    value.innerHTML = numStr2;
  }
})
eightBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '8'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '8'
    value.innerHTML = numStr2;
  }
})
nineBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '9'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '9'
    value.innerHTML = numStr2;
  }
})
zeroBtn.addEventListener('click', function() {
  if (!ifOperate) {
    numStr1 += '0'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '0'
    value.innerHTML = numStr2;
  }
})
