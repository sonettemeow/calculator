const numberBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.opn');
const equalsBtn = document.getElementById('ans');
const clearAll = document.getElementById('ac');
const delNum = document.getElementById('c');
const reverse = document.getElementById('op-int');
let previousValue = document.getElementById('previous');
let currentValue = document.getElementById('current');


// FIX OVERFLOW AND DECIMAL PTS


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

function buildEquation() {
    let previous = parseFloat(previousValue.innerHTML.slice(0,-1));
    let current = parseFloat(currentValue.innerHTML);
    let operation = previousValue.innerHTML.slice(-1);
    return operate(previous, current, operation);
}

numberBtns.forEach(button => button.addEventListener('click', () => {
    if (button.innerHTML === '.' && currentValue.innerHTML.includes('.')) {
        return;
    }
    if (currentValue.innerHTML > 999999999) {
        return;
    }
    currentValue.innerHTML = currentValue.innerHTML + button.innerHTML;
}))

operationBtns.forEach(button => button.addEventListener('click', () => {
    if (previousValue.innerHTML === '' && currentValue.innerHTML === '') {
        return;
    }
    if (previousValue.innerHTML !== '') {
        previousValue.innerHTML = buildEquation().toString() + button.innerHTML.toString();
        currentValue.innerHTML = '';
    } else if (previousValue.innerHTML === '') {
        previousValue.innerHTML = currentValue.innerHTML + button.innerHTML;
        currentValue.innerHTML = '';
    }
}))

equalsBtn.addEventListener('click', () => {
    if(currentValue.innerHTML === '' && previousValue.innerHTML === '') {
        return;
    }
    currentValue.innerHTML = buildEquation();
    previousValue.innerHTML = '';
    //previousValue.innerHTML = previousValue.innerHTML.toString() + currentValue.innerHTML;  
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