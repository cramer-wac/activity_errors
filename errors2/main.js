/*
Errors2 (7 errors to fix)

This page is not working.  It should take two numbers and display their sum on the page

Not all of the errors will manifest as “errors” in the inspector.  Two of the errors are “logical”.

*/

const inputOne = document.querySelector("#inputone");
const inputTwo = document.querySelector("#inputtwo");
const addButton = document.querySelector("#addbutton");
const resultDiv = document.querySelector("#resultdiv");

function addNumbers(x, y) {
    return x + y;
}

addButton.addEventListener("click", function () {
    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;
    let sum = addnumbers(numberOne, numberTwo);
    resultDiv.innerHTML += "<div>" + numberOne + " + " + numberTwo + " = " + sum + "</div>"
})