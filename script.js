const numberBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.opn');
const equalsBtn = document.getElementById('ans');
const clearAll = document.getElementById('ac');
const deleteBtn = document.getElementById('delete');
const changeSignBtn = document.getElementById('op-int');
let previousValue = document.getElementById('previous');
let currentValue = document.getElementById('current');
currentValue.setAttribute('tabindex', 0);
previousValue.setAttribute('tabindex', 0);

numberBtns.tabIndex = -1;;
operationBtns.tabIndex = -1;
equalsBtn.tabIndex = -1;
clearAll.tabIndex = -1;
deleteBtn.tabIndex = -1;
changeSignBtn.tabIndex = -1;
// TO DO: KEYBOARD SUPPORT

function operate(previous, current, operator) {
    let answer = 0;
    switch (operator) {
        case '+':
            answer =  previous + current;
            break;
        case '-':
            answer =  previous - current;
            break;
        case '*':
            answer =  previous * current;
            break;
        case '÷':
            answer =  previous / current;
            break;
        default: 
            return;
    }

    if (Number.isInteger(answer) && answer.toString().length < 10) {
        return answer;
    } else if (Number.isInteger(answer) && answer.toString().length >= 10) {
        return answer.toExponential(2);
    }

    let beforeDecimal = answer.toString().split('.')[0].length;
    let afterDecimal = answer.toString().split('.')[1].length;

    if (beforeDecimal > 9) {
        return answer.toExponential(2);
    } else if (beforeDecimal === 9) {
        return Math.trunc(answer);
    } else if (beforeDecimal === 8 && afterDecimal > 1) {
        return answer.toFixed(1);
    } else if (beforeDecimal === 7 && afterDecimal > 2) {
        return answer.toFixed(2);
    } else if (beforeDecimal === 6 && afterDecimal > 3) {
        return answer.toFixed(3);
    } else if (beforeDecimal === 5 && afterDecimal > 4) {
        return answer.toFixed(4);
    } else if (beforeDecimal === 4 && afterDecimal > 5) {
        return answer.toFixed(5);
    } else if (beforeDecimal === 3 && afterDecimal > 6) {
        return answer.toFixed(6);
    } else if (beforeDecimal === 2 && afterDecimal > 7) {
        return answer.toFixed(7);
    } else if (beforeDecimal === 2 && afterDecimal > 7) {
        return answer.toFixed(7);
    } else if (beforeDecimal === 1 && afterDecimal > 8) {
        return answer.toFixed(8);
    }
    return answer.toString();
}

function buildEquation() {
    let previous = parseFloat(previousValue.innerHTML.slice(0,-1));
    let current = parseFloat(currentValue.innerHTML);
    let operation = previousValue.innerHTML.slice(-1);
    return operate(previous, current, operation);
}

numberBtns.forEach(button => button.addEventListener('click', (e) => {
    if (button.innerHTML === '.' && currentValue.innerHTML.includes('.')) {
        return;
    }
    if (currentValue.innerHTML.includes('.') === false && currentValue.innerHTML.length === 9) {
        return;
    }
    if (currentValue.innerHTML.includes('.') && currentValue.innerHTML.length > 9) {
        return;
    }
    currentValue.innerHTML = currentValue.innerHTML.replace(/^0+/, '') + button.innerHTML;
    if (currentValue.innerHTML[0] === '.') {
        currentValue.innerHTML = '0' + currentValue.innerHTML;
    }
    //currentValue.innerHTML = currentValue.innerHTML + button.innerHTML;
}))

operationBtns.forEach(button => button.addEventListener('click', (e) => {
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

equalsBtn.addEventListener('click', (e) => {
    if (currentValue.innerHTML !== '' && previousValue.innerHTML === '') {
        return;
    }
    if(currentValue.innerHTML === '' && previousValue.innerHTML === '') {
        return;
    }
    if(currentValue.innerHTML === '' && previousValue.innerHTML !== '') {
        return;
    }
    currentValue.innerHTML = buildEquation();
    previousValue.innerHTML = '';
})

clearAll.addEventListener('click', (e) => {
    currentValue.innerHTML = '';
    previousValue.innerHTML = '';
})

deleteBtn.addEventListener('click', (e) => {
    if (previousValue.innerHTML !== '' && currentValue.innerHTML === '') {
        currentValue.innerHTML = previousValue.innerHTML;
        previousValue.innerHTML = '';
    }
    let currentDisplayDelete = currentValue.innerHTML.slice(0, -1);
    currentValue.innerHTML = currentDisplayDelete;
})

changeSignBtn.addEventListener('click', (e) => {
    if (currentValue.innerHTML === '') {
        currentValue.innerHTML = currentValue.innerHTML + '-';
    } else if (currentValue.innerHTML === '-') {
        currentValue.innerHTML = '';
    } else {
        let integer = parseFloat(currentValue.innerHTML) * -1;
        currentValue.innerHTML = integer.toString();
    }
})

//////////////////////

function keyboardInput() {
    currentValue.addEventListener('keydown', (key) => {
        key.preventDefault();
        if (key.code === 'Tab') {
            key.preventDefault();
            console.log('Not Tab');
            return false;
        }
        currentValue.innerHTML = currentValue.innerHTML + key.key;
        console.log(key);
    })
}

window.onload = function () {
    document.onkeydown = keyboardInput();

    //document.onkeydown = backspace();
}