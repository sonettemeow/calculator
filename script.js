const numberBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.opn');
const decimalPoint = document.getElementById('dec');
const equalsBtn = document.getElementById('ans');
const clearAll = document.getElementById('ac');
const delNum = document.getElementById('c');
const reverse = document.getElementById('op-int');
let previousValue = document.getElementById('previous');
let currentValue = document.getElementById('current');

function operate(previous, current, operator) {
    switch (operator) {
        case '+':
            return previous + current;
            break;
        case '-':
            return previous - current;
            break;
        case '*':
            return previous * current;
            break;
        case '÷':
            return previous / current;
            break;
        default: 
            return;
    }
    
}

////////////

function buildEquation(element) {
    
}

numberBtns.forEach(button => button.addEventListener('click', () => {
    if (button.innerHTML === '.' && currentValue.innerHTML.includes('.')) {
        return;
    }
    currentValue.innerHTML = currentValue.innerHTML.toString() + button.innerHTML.toString();
}))

operationBtns.forEach(button => button.addEventListener('click', () => {
    previousValue.innerHTML = currentValue.innerHTML.toString() + button.innerHTML;
    currentValue.innerHTML = '';
}))

equalsBtn.addEventListener('click', () => {
    let previous = parseFloat(previousValue.innerHTML.slice(0,-1));
    let current = parseFloat(currentValue.innerHTML);
    let operation = previousValue.innerHTML.slice(-1);
    console.log('previous: ' + previous + ' ' + typeof(previous));
    console.log('current: ' + current + ' ' + typeof(current));
    console.log('operation: ' + operation);
    console.log(operate(previous, current, operation));

    currentValue.innerHTML = operate(previous, current, operation);
})

clearAll.addEventListener('click', () => {
    current = '';
    previous = '';
    currentValue.innerHTML = '';
    previousValue.innerHTML = '';
})

delNum.addEventListener('click', button => {
    if (previousValue.innerHTML !== '' && currentValue.innerHTML === '') {
        currentValue.innerHTML = previousValue.innerHTML;
        previousValue.innerHTML = '';
    }
    let currentDisplayDelete = currentValue.innerHTML.slice(0, -1);
    currentValue.innerHTML = currentDisplayDelete;
})