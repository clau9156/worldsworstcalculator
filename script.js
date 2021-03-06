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


// let firstNumber = document.querySelector("#firstNumber").value;
// let secondNumber = document.querySelector("#secondNumber").value;
// let operator = document.querySelector("#operator").value;
let results = document.querySelector("#results");
let clear = document.querySelector("#clear");
let calculateButton = document.querySelector("button#calculate");
let calculate = document.querySelector("#calculate");
// let decimals = document.querySelector("#decimals");

document.querySelector("#calculate").addEventListener("click", calculating);
document.querySelector("#clear").addEventListener("click", e=>{
    window.location.reload();
});
document.querySelector("#results").scrollTo(0,1000000);


function calculating() {
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;
    let operator = document.querySelector("#operator").value;
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
    let result;
    // calculate first + second 
    if (operator === "add") {
    result = Number(firstNumber) + Number(secondNumber);
    // calculate first - second
    } else if (operator === "sub") {
    result = Number(firstNumber) - Number(secondNumber);
    // calculate first / second    
    } else if (operator === "div") {
    result = Number(firstNumber) / Number(secondNumber);
    // calculate first * second
    } else if (operator === "mul") {
    result = Number(firstNumber) * Number(secondNumber);
    }  
    console.log(result);
    showResult(result); 
    return result;
}

function showResult(result) {
    let decimals = document.querySelector("#decimals").value;
    let doRound = document.querySelector("#doRound").value;
    let finalResult = document.createElement("li");
    console.log("decimals");
    console.log("doRound");
    
    if (doRound === "on") {
        let num = result;
        let n;
        let option = document.querySelector("#decimals").value;
    

        // still working on it
        if (decimals.value === "0") {
            n = num.toFixed();
        } else if (decimals.value === "1") {
            n = num.toFixed(1);
        } else if (decimals.value === "2") {
            n = num.toFixed(2);
        } else if (decimals.value === "3") {
            n = num.toFixed(3);
        } else if (decimals.value === "4") {
            n = num.toFixed(4);
        } else if (decimals.value === "5") {
            n = num.toFixed(5);
        } else if (decimals.value === "6") {
            n = num.toFixed(6);
        } else if (decimals.value === "7") {
            n = num.toFixed(7);
        } else if (decimals.value === "8") {
            n = num.toFixed(8);
        }

        finalResult.textContent = result;
    } else {
        finalResult.textContent = result;
    }
    results.appendChild(finalResult);
}


// other version not gonna delete till solved
// check if result should be rounded
// function checkRounded() {
//     console.log("checkRounded");
//     // if --->
//     // read number of decimals
//     // ((((EXAMPLE))))
//     let num = calculate;
//     let n;
//     let option = document.querySelector("#decimals").value;
//     if (option === "0") {
//         n = num.toFixed();
//     } else if (option === "1") {
//     n = num.toFixed(1);
//     } else if (option === "2") {
//     n = num.toFixed(2);
//     } else if (option === "3") {
//     n = num.toFixed(3);
//     } else if (option === "4") {
//     n = num.toFixed(4);
//     } else if (option === "5") {
//     n = num.toFixed(5);
//     } else if (option === "6") {
//     n = num.toFixed(6);
//     } else if (option === "7") {
//     n = num.toFixed(7);
//     } else if (option === "8") {
//     n = num.toFixed(8);
//     }
   
//     // round result to num of decimals

//     // else (both then got to) --->
// }

// then to first number
// write result into first number field
// function WriteFirstNumberField(answer) {
//     // writing to field --->
//     // doc.qse("#firstNumber".value = result;
//     document.querySelector("#firstNumber").value = result;
// }








