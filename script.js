const numberBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.opn');
const clearAll = document.getElementById('ac');
const delNum = document.getElementById('c');
const reverse = document.getElementById('op-int');
let previousValue = document.getElementById('previous');
let currentValue = document.getElementById('current');

//previousValue.innerHTML = 'EWAN KO NA';
//currentValue.innerHTML = 'HAYSSS';

currentValue = '';
function append(number) {
    currentValue = currentValue.toString() + number.toString();
}

function update() {
    currentValue.innerHTML = currentValue;
    console.log('Are ang current balyu: ' + currentValue);
}

numberBtns.forEach(button => button.addEventListener('click', () => {
    append(button.innerText);
    update();
}))

operationBtns.forEach(button => button.addEventListener('click', () => {
    previousValue.innerHTML = button.innerText;
}))

clearAll.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
})

reverse.addEventListener('click', () => {
    if (Math.sign(currentValue) === 1) {
        currentValue * -1;
    } else if (Math.sign(currentValue) === -1) {
        currentValue * -1;
    }
})