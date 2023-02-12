const FIXED = 5;
const btns = document.querySelector(".calculator__buttons");
const output = document.querySelector(".calculator__screen-one");
const result = document.getElementById('result');
let firstNum = "";
let secondNum = "";
let sign = "";

btns.onclick = function (event) {
    if (!Object.keys(event.target.dataset).length) return;

    const isOperation = 'operation' in event.target.dataset;
    const isNumber = 'num' in event.target.dataset;

    const key = isNumber ? event.target.dataset.num : event.target.dataset.operation;

    output.innerText += key;

    if (isNumber) {
        if (!secondNum && !sign) {
            firstNum += key;
        } else if (firstNum && sign) {
            secondNum = key;
        }
    } else if (isOperation) {
        sign = key;
    }
};

function sum() {
    firstNum = Number(firstNum) + Number(secondNum)
}

function minus() {
    firstNum = firstNum - secondNum
}

function multiply() {
    firstNum = firstNum * secondNum
}

function divide() {
    firstNum = firstNum / secondNum
}

function sinus() {
    firstNum = Math.sin(firstNum).toFixed(FIXED)
}
function cosinus() {
    firstNum = Math.cos(firstNum).toFixed(FIXED)
}

function degree() {
    firstNum = (firstNum * (Math.PI / 180)).toFixed(FIXED)
}

function exponent() {
    firstNum = Math.exp(firstNum).toFixed(FIXED);
}

const clear = document.getElementById("clear");
clear.onclick = function () {
    firstNum = secondNum = sign = output.innerText = result.innerText = "";
};

const remove = document.getElementById("remove");
remove.onclick = function () {
    output.innerText = output.innerText.slice(0, -1);
};

const equal = document.getElementById("equal");
equal.onclick = function () {
    switch (sign) {
        case "+":
            sum();
            break;
        case "-":
            minus();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        case "e":
            exponent();
            break
        case "sin":
            sinus();
            break
        case "deg":
            degree();
            break
        case "cos":
            cosinus();
            break
    }
    result.innerText = `=${firstNum}`;
};