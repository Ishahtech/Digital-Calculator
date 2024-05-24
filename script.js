const inputField = document.getElementById('input');
const displayResultField = document.getElementById('result-display');

//function to display the value clicked
function appendValue (value) {
    inputField.value += value;
}

//function to delete entered input
function clearInput () {
    inputField.value = '';
    displayResultField.textContent = '';
}

function deleteLastInput () {
    inputField.value = inputField.value.slice(0, -1);
}


function calculateResult() {
    try {
        const result = eval(inputField.value); // eval is used for simplicity but not recommended for production
        displayResultField.textContent = result;
    } catch (error) {
        displayResultField.textContent = 'Error';
    }
}

function handlePercentage() {
    try {
        const result = eval(inputField.value) / 100;
        displayResultField.textContent = result;
    } catch (error) {
        displayResultField.textContent = 'Error';
    }
}