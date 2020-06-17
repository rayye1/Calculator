//Operation Buttons
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector('#mul')
const divBtn = document.querySelector('#div')
const equBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clear')
const backBtn = document.querySelector('#backspace')
const val = document.querySelector('#value')
const decBtn = document.querySelector('#decimal')

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
let numDec = 0

function operate(operator, num1, num2) {
  if (operator == 'add') {
    return num1 + num2;
  }
  else if (operator == 'subtract') {
    return num1 - num2;
  }
  else if (operator == 'multiply') {
    return num1 * num2;
  }
  else if (operator = 'divide') {
    return num1 / num2;
  }
}

function addListen() {
  operation = 'add'
  ifOperate = true
  numDec = 0
}
function subListen() {
  operation = 'subtract'
  ifOperate = true
  numDec = 0
}
function mulListen() {
  operation = 'multiply'
  ifOperate = true
  numDec = 0
}
function divListen() {
  operation = 'divide'
  ifOperate = true
  numDec = 0
}
function equalListen() {
  total = operate(operation, parseFloat(numStr1), parseFloat(numStr2))
  value.innerHTML = total.toFixed(4)
  numStr1 = "" + total
  numStr2 = ""
  numDec = 0
}
function clearListen() {
  numStr1 = ""
  numStr2 = ""
  ifOperate = false
  value.innerHTML = 0
  numDec = 0
}
function decListen() {
  if ((numDec == 0) && (!ifOperate)) {
    numStr1 += "."
    value.innerHTML = numStr1
  }
  else if ((numDec == 0) && (ifOperate)) {
    numStr2 += "."
    value.innerHTML = numStr2
  }
  numDec = 1
}


//Button Listeners for +, - , * , /
addBtn.addEventListener('click', addListen)
subBtn.addEventListener('click', subListen)
mulBtn.addEventListener('click', mulListen)
divBtn.addEventListener('click', divListen)
equBtn.addEventListener('click', equalListen)
clearBtn.addEventListener('click', clearListen)
decBtn.addEventListener('click', decListen)


//Button and Key Listeners for 0,1,2,3,4,5,6,7,8,9
function oneListen() {
  if (!ifOperate) {
    numStr1 += '1'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '1'
    value.innerHTML = numStr2;
  }
}
function twoListen() {
  if (!ifOperate) {
    numStr1 += '2'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '2'
    value.innerHTML = numStr2;
  }
}
function threeListen() {
  if (!ifOperate) {
    numStr1 += '3'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '3'
      value.innerHTML = numStr2;
  }
}
function fourListen() {
  if (!ifOperate) {
    numStr1 += '4'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '4'
    value.innerHTML = numStr2;
  }
}
function fiveListen() {
  if (!ifOperate) {
    numStr1 += '5'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '3'
    value.innerHTML = numStr2;
  }
}
function sixListen() {
 if (!ifOperate) {
   numStr1 += '6'
   value.innerHTML = numStr1;
 }
 else {
   numStr2 += '6'
   value.innerHTML = numStr2;
 }
}
function sevenListen() {
  if (!ifOperate) {
    numStr1 += '7'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '7'
    value.innerHTML = numStr2;
  }
}
function eightListen() {
  if (!ifOperate) {
    numStr1 += '8'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '8'
    value.innerHTML = numStr2;
  }
}
function nineListen() {
  if (!ifOperate) {
    numStr1 += '9'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '9'
    value.innerHTML = numStr2;
  }
}
function zeroListen() {
  if (!ifOperate) {
    numStr1 += '0'
    value.innerHTML = numStr1;
  }
  else {
    numStr2 += '0'
    value.innerHTML = numStr2;
  }
}
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 13) {
    equalListen()
  }
  else if (e.keyCode == 48) {
    zeroListen()
  }
  else if (e.keyCode == 49) {
    oneListen()
  }
  else if (e.keyCode == 50) {
    twoListen()
  }
  else if (e.keyCode == 51) {
    threeListen()
  }
  else if (e.keyCode == 52) {
    fourListen()
  }
  else if (e.keyCode == 53) {
    fiveListen()
  }
  else if (e.keyCode == 54) {
    sixListen()
  }
  else if (e.keyCode == 55) {
    sevenListen()
  }
  else if (e.keyCode == 56) {
    eightListen()
  }
  else if (e.keyCode == 57) {
    nineListen()
  }
  else if(e.keyCode == 190) {
    decListen()
  }
})
oneBtn.addEventListener('click', oneListen)
twoBtn.addEventListener('click', twoListen)
threeBtn.addEventListener('click', threeListen)
fourBtn.addEventListener('click', fourListen)
fiveBtn.addEventListener('click', fiveListen)
sixBtn.addEventListener('click', sixListen)
sevenBtn.addEventListener('click', sevenListen)
eightBtn.addEventListener('click', eightListen)
nineBtn.addEventListener('click', nineListen)
zeroBtn.addEventListener('click', zeroListen)
