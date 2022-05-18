const numberBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.opn');
const clearAll = document.getElementById('ac');
const delNum = document.getElementById('c');
const reverse = document.getElementById('op-int');
let previousValue = document.getElementById('previous');
let currentValue = document.getElementById('current');

//previousValue.innerHTML = 'EWAN KO NA';
//currentValue.innerHTML = 'HAYSSS';

//currentValue = '';

function operate(currentValue, previousValue, operator) {
    switch (operator) {
        case '+':
            computation = previousValue + currentValue;
            break;
        case '-':
            computation = previousValue - currentValue;
            break;
        case 'x':
            computation = previousValue * currentValue;
            break;
        case '÷':
            computation = previousValue / currentValue;
            break;
        default: 
            return;
    }
    return computation;
}

numberBtns.forEach(button => button.addEventListener('click', () => {
    let currentDisplay = currentValue.innerHTML.toString() + button.innerHTML;
    currentValue.innerHTML = currentDisplay;
}))

operationBtns.forEach(button => button.addEventListener('click', () => {
    let previousDisplay = currentValue.innerHTML.toString() + button.innerHTML;
    previousValue.innerHTML = previousDisplay;
    currentValue.innerHTML = '';
}))

clearAll.addEventListener('click', () => {
    current = '';
    previous = '';
    currentValue.innerHTML = '';
    previousValue.innerHTML = '';
})

delNum.addEventListener('click', button => {
    currentDisplayDelete = currentValue.innerHTML.slice(0, -1);
    currentValue.innerHTML = currentDisplayDelete;
})