// readfrom field --->
// const firstNumber = doc.qse("#firstNumber").value;
// writing to field --->
// doc.qse("#firstNumber".value = result;
// read from drop-down --->
// same as from a field!
// .value
// checking checkbox
// not .value but .checked <--- boolean
// scrolling
// doc.qse(container).scrollTo(0,1000000)

"use strict";


let firstNumber = 0;
let secondNumber;
let operator;
let answer;
let calculate;
let clear;
let calculateButton = document.querySelector("button#calculate");

window.addEventListener("load", settingUp);

// setting up 
function settingUp() {
    console.log("settingUp");
    clickCalculate();
}

// click "calculate"
function clickCalculate() {
    console.log("clickCalculate");
    document.querySelector("#calculate").addEventListener("click", clickCalculate);

}

// read first number 
function readFirstNumber() {
    console.log("readFirstNumber");
    // readfrom field --->
    // const firstNumber = doc.qse("#firstNumber").value;
    const firstNumber = document.querySelector("#firstNumber").value;
    return firstNumber;
}

// read second number
function readSecondNumber() {
    console.log("readSecondNumber");
    const secondNumber = document.querySelector("#secondNumber").value;
    return secondNumber;
}

// read operator
function readOperator() {
    console.log("readOperator");
    selectValue = document.getElementById("operator").value;
    calculation();
}


// if else --->
function calculation() {
    console.log("calculation");
    const operatorInput = document.querySelector("#operator");
    // calculate first + second 
    if (operatorInput === "add") {
        console.log(answer);
        answer = firstNumber + secondNumber;
    // calculate first - second
    } else if (operatorInput === "sub") {
        console.log(answer);
        answer = firstNumber - secondNumber;
    // calculate first / second    
    } else if (operatorInput === "div") {
        console.log(answer);
        answer = firstNumber / secondNumber;
    // calculate first * second
    } else if (operatorInput === "mul") {
        console.log(answer);
        answer = firstNumber * secondNumber;
    }
    checkRounded();
}

// check if result should be rounded
function checkRounded() {
    console.log("checkRounded");
    // if --->
    // read number of decimals
    // ((((EXAMPLE))))
    let num = calculate;
    let n;
    let option = document.querySelector("#decimals").value;
    if (option === "0") {
        n = num.toFixed();
    } else if (option === "1") {
    n = num.toFixed(1);
    } else if (option === "2") {
    n = num.toFixed(2);
    } else if (option === "3") {
    n = num.toFixed(3);
    } else if (option === "4") {
    n = num.toFixed(4);
    } else if (option === "5") {
    n = num.toFixed(5);
    } else if (option === "6") {
    n = num.toFixed(6);
    } else if (option === "7") {
    n = num.toFixed(7);
    } else if (option === "8") {
    n = num.toFixed(8);
    }

    
    
    // round result to num of decimals

    // else (both then got to) --->
}

// write result into first number field
function WriteFirstNumberField(answer) {
    // writing to field --->
    // doc.qse("#firstNumber".value = result;
}
// append result to end of list

// scroll list to the bottom 
    // scrolling
    // doc.qse(container).scrollTo(0,1000000)
    // document.querySelector().scrollTo(0,1000000);





// click "clear results"
function clickClear() {
    console.log("clickClear");
    document.querySelector("#clear").addEventListener("click", clearResults);
    clearResults();
}

// clear list of results
function clearResults() {
    console.log("clearResults");
}