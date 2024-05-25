//declaration to get the inner html
const inputField = document.getElementById('input');
const displayResultField = document.getElementById('result-display');

//function to display the value clicked
function appendValue (value) {
    inputField.value += value;
}

//function to clear all input
function clearInput () {
    inputField.value = '';
    displayResultField.textContent = '';
}

//function to delete an input
function deleteLastInput () {
    inputField.value = inputField.value.slice(0, -1);
}

//function that triggers the '=' event
function calculateResult() {
    try {
        const result = eval(inputField.value); // eval is used to denote evaluation
        displayResultField.textContent = result;
    } catch (error) {
        displayResultField.textContent = 'Error';
    }
}
//function to perform percentage
function handlePercentage() {
    try {
        const result = eval(inputField.value) / 100;
        displayResultField.textContent = result;
    } catch (error) {
        displayResultField.textContent = 'Error';
    }
}