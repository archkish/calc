// const btns = document.querySelectorAll('.btn')
let btns = document.querySelector(".calculator__buttons");
let output = document.querySelector(".calculator__screen-one");
let result = document.getElementById('result');
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
let operation = ["*", "+", "-", "/", "e", "deg", "sin", "µ"];
let firstNum = "";
let secondNum = "";
let sign = "";
let finish = false;

// try2

btns.addEventListener("click", function (event) {
  
  if (!event.target.classList.contains("symbol")) return;
  if (event.target.classList.contains("all-clear")) return;

  let key = event.target.innerText;

  output.innerText += key;


  if (numbers.includes(key)) {
    if (secondNum === "" && sign === "") {
      firstNum += key;
    } else if (firstNum !== "" && sign !== "" && finish) {
      secondNum = key;
      finish = false;
    } else {
      secondNum += key;
    }

    console.log(firstNum, sign, secondNum);
    return;
  }


  if (operation.includes(key)) {
    sign = key;
    console.log(firstNum, sign, secondNum);
    return;
  }
  console.log(firstNum, sign, secondNum);


  if (key === "=") {
    
    switch (sign) {
      case "+":
        sum () 
        break;
      case "-":
        minus()
        break;
      case "*":
        multiply()
        break;
      case "/":
        devide()
        break;
      case "e":
        exponent()
        break
      case "sin":
        sinus()
        break
      case "deg":
        degree()
        break
    }
    finish = true;
    result.innerText = `=${firstNum}`;
    console.log(firstNum);
    console.log(firstNum, sign, secondNum);
  }


});

function sum() {
  return firstNum = (+firstNum) + (+secondNum)
}

function minus() {
  return firstNum = firstNum - secondNum
}
function multiply() {
  return firstNum = firstNum * secondNum
}
function devide() {
  return firstNum = firstNum / secondNum
}

function sinus() {
  return firstNum = Math.sin(firstNum).toFixed(5)
}

function degree() {
  let pi = Math.PI
  return firstNum = (firstNum * (pi/180)).toFixed(5)
}

function exponent() {
  return firstNum = Math.pow(2.7182818284, firstNum).toFixed(5)
}

// clear all
let ac = document.getElementById("all-clear");
ac.addEventListener("click", function () {
  firstNum = "";
  secondNum = "";
  sign = "";
  output.innerText = "";
  result.innerText = "";
});

// del last element
let del = document.getElementById("del");
del.addEventListener("click", function () {
  output.innerText = output.innerText.slice(0, -1);
});

// functions

// let sum = document.getElementById('plus');
// sum.addEventListener('click', function () {
//   return firstNum = (+firstNum) + (+secondNum);
// })

// console.log(firstNum, secondNum)

// let minus = document.getElementById('minus');
// minus.addEventListener('click', function (){
//   return a - b;
// })

// let multiply = document.getElementById('mult');
// multiply.addEventListener('click', function() {
//   return a * b
// })

// let devide = document.getElementById('divide');
// devide.addEventListener('click', function() {
//   return a / b
// })

// let exponent = document.getElementById('exponent');
// exponent.addEventListener('click', function() {
//   return Math.pow(2,7182818284, a)
// })

// let sinus = document.getElementById('sinus');
// sinus.addEventListener('click', function() {
//   return Math.sin(a)
// })

// let degree = document.getElementById('degree');
// degree.addEventListener('click', function() {

// })

// for(let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function() {
//    let  b = +btns[i].innerHTML
//     // console.log(b)
//     output.innerHTML += btns[i].innerHTML

//     let funk = document.querySelectorAll('.func')
//     let arrMain = [...funk]

//     arrMain.forEach(el => {
//       if(el.innerHTML === btns[i].innerHTML) {
//         // console.log(el.innerHTML + "work")
//         // output.className += " ex"
//         let a = el.innerHTML
//         // a.style = "color: red"
//         console.log(a)

//       }
//     })

//   })

// }

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function devide(a, b) {
//   return a / b;
// }

// function result() {
// let operation = prompt("Введіть операцію (+, -, *, /)", "");

// arr = ["+", "-", "*", "/"];
// arr.includes(operation);

// if (!arr.includes(operation)) {
//   alert("Ви ввели неправильну операцію");
//   return;
// }

// let a = +prompt("Введіть перше число", "");
// let b = +prompt("Введіть друге число", "");

//   if (isNaN(a) || isNaN(b)) {
//     alert("Ви ввели не числa");
//     return;
//   }

//   if (operation === "+") {
//     alert( add(a, b));
//   } else if (operation === "-") {
//     alert( subtract(a, b));
//   } else if (operation === "*") {
//     alert( multiply(a, b));
//   } else if (operation === "/") {
//     alert( devide(a, b));
//   }

//   const next = confirm('бажаєте продовжити роботу з калькулятором?');
//   if(next === true) {
//     result();
//   } else {
//     return
//   }
// }
// result()