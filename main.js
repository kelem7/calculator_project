const keys = document.querySelector('.calculator_keys');
const calculator = document.querySelector('.container');
const numbers = document.querySelectorAll('.number');
const equals = document.querySelectorAll('.equals');
const operator = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const deleteBtn = document.querySelectorAll('.delete');
let displayValue = '0';
let btnNumber;
let firstValue;
let secondValue;
let operatorChoice;
let solution;

keys.addEventListener('click', e => {
    const key = e.target;
    const action = e.target.className;
    const btnValue = e.target.value;
    let displayedNum = display.textContent;
    switch (key.matches('button')) {
        case action === 'operator':
            firstValue = displayedNum;
            operatorChoice = btnValue;
            calculator.classList.add('previousKeyOperator');
            return operatorChoice;
            break;
        case action === 'number':
            if (displayedNum === '0' || calculator.classList.contains('previousKeyOperator')) {
                display.textContent = btnValue;
                calculator.classList.remove('previousKeyOperator');
             } else if (solution) {
                 display.textContent = btnValue;
                 solution = undefined; 
             } else {
                 display.textContent = displayedNum + btnValue;
             }
            break;
        case action === 'decimal':
            if (displayedNum.includes('.')) { 
                display.textContent = displayedNum;
             } else {
                 display.textContent = displayedNum + '.';
             }
            break;
        case action === 'clear':
            display.textContent = '0';
            firstValue = 0;
            secondValue = 0;
            solution = null;
            operatorChoice = null;
            break;
        case action === 'delete':
            if (displayedNum.length == '1') {
                display.textContent = '0';
            } else {
                display.textContent = displayedNum.slice(0, -1);
            }
            break;
        case action === 'equals':
            secondValue = displayedNum;
            operate(operatorChoice, Number(firstValue), Number(secondValue));
            break;
    }
    
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;



function operate (operator, a, b) {
    switch (operator) {
        case 'add' : 
          solution = add(a, b);
          display.textContent = solution;
          break;
        case 'subtract' : 
          solution = subtract(a, b);
          display.textContent = solution;
          break; 
        case 'multiply' : 
          solution = multiply(a, b);
          display.textContent = solution;
          break; 
        case 'divide' : 
          solution = divide(a, b);
          display.textContent = solution;
          break; 
    }
   
   
    //console.log(solution);
    //console.log(operator);
    //console.log(arr);

}

///operate(multiply, 10, 2);

