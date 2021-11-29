// Created Error Handlers for 4 Types of Errors
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const fac = document.getElementById('facilitator');
const firstError = document.createElement('div');
const lastError = document.createElement('div');
const facError = document.createElement('div');
const typeError = document.createElement('div');

// First Name min length = 2
firstError.innerHTML = 'The first name must be at least 2 letters.';
firstError.className = 'error';
let fNameDiv = document.getElementById('firstNameDiv');
fNameDiv.appendChild(firstError);

// Last Name min length = 2
lastError.innerHTML = 'The last name must be at least 2 letters.';
lastError.className = 'error';
let lNameDiv = document.getElementById('lastNameDiv');
lNameDiv.appendChild(lastError);

// Facilitator is in array below
facError.innerHTML = 'Invalid facilitator entry, please try again.';
facError.className = 'error';
let facDiv = document.getElementById('facDiv');
facDiv.appendChild(facError);

// Names can only contain letters A-Z
typeError.innerHTML = 'Names should only include the letters A-Z'
typeError.className = 'error';
facDiv.appendChild(typeError);


/*********** Assignment 3 Reworked- Start **************/
/**
 * Collects User name on button click, 
 * starts calculator
 */
function startProgram(){
    // initial welcome
    alert('Welcome to my page!');
    let viewer = "";
    while (viewer == ''){
        viewer = prompt("Please enter your name: ");
    }

    // return viewers name as alert and inside document (ES6)
    alert(`Welcome, ${viewer}!`)
    let header = document.querySelector('#heading');
    header.innerHTML = `Welcome to my Round Pen, ${viewer}!`;
    request();
}


/**
 * Requests numbers from User
 */
function request(){
    let firstNum="";
    let secondNum="";
    // check for number value
    while (isNaN(firstNum) || firstNum == ""){
        firstNum = prompt('Please enter a number: ');
    }
    while (isNaN(secondNum) || secondNum == ""){
        secondNum = prompt('Please enter another number: ');
    }
    calculator(firstNum, secondNum);
} 


/**
 * Converts num to decimals, adds, returns total
 * @param {*} first 
 * @param {*} sec 
 * @returns 
 */
function calculator(first, sec){
    // Convert to float to allow for decimals
    const total = parseFloat(first) + parseFloat(sec);
    responses(total)
    return total;
}


/**
 * Determines big or small number
 * @param {total} total float passed from calculator()
 */
function responses(total){
    // using concatenation instead of ES6
    alert('The sum of your two numbers is ' + total + '.');
   
    // conditional statement to check for size
    if (total > 10){
        alert("That is a big number!");
    } else {
        alert("That is a small number.");
    }
    rerun();
}


/**
 * Function handles if User requests to play again or 
 * quit
 */
function rerun(){
    // loop with prompt
    while(true){
        const response = prompt('Would you like to add 2 different numbers? (y/n)');
        // check for no or empty answer, if so, exit
        if (response.toLowerCase() === 'n'){
            break;
        // if yes
        } else if (response.toLowerCase() === 'y'){
            request();
        } else {
            alert("Please answer with 'y' or 'n' only");
        }
    }
    alert("Thanks for playing!");
}
/*********** Assignment 3 Reworked- End **************/


/**
 * Menu Toggle in Mobile View
 */
function toggleMenu(){
    const nav = document.getElementsByTagName('nav')[0];
    if (nav.style.display == 'flex'){
        nav.style.display = "none";
    } else {
        nav.style.display = 'flex';
    }
}


/**
 * Error Displays under Inputs
 * @param {*} whichSection 
 */
function errorHandling(whichSection){
 
    // First Name error
    if (whichSection.id === 'firstName'){
        firstError.style.display = 'block';
        lastError.style.display = 'none';
        facError.style.display = 'none';
        typeError.style.display = 'none';
    // Last name error
    } else if (whichSection.id === 'lastName'){
        firstError.style.display = 'none';
        lastError.style.display = 'block';
        facError.style.display = 'none';
        typeError.style.display = 'none';
    // Fac name error
    } else if (whichSection.id === 'facilitator'){
        firstError.style.display = 'none';
        lastError.style.display = 'none';
        facError.style.display = 'block';
        typeError.style.display = 'none';
    } else if (whichSection === 'type'){
        firstError.style.display = 'none';
        lastError.style.display = 'none';
        facError.style.display = 'none';
        typeError.style.display = 'block';
    }
}


/**
 * Form Validation
 * @param {e} e form submission
 * @returns false on error
 */
function validateForm(e){
    // regex for alphabet characters only
    const regex = /^[A-Za-z]+$/;

    // check length >= 2
    if (fName.value.length < 2 ){
        e.preventDefault();
        errorHandling(fName);
        return false;
    } 
    if (lName.value.length < 2){
        e.preventDefault();
        errorHandling(lName);
        return false;
    }

    // check for any characters that don't match the regex
    if (!fName.value.match(regex) || !lName.value.match(regex)){
        e.preventDefault();
        errorHandling('type')
        return false;
    }

    // check for a valid facilitator name
    let match = false;
    const facilitators = ['fazil', 'christian', 'josh', 'chris']
    for (let i = 0; i<facilitators.length; i++){
        if (fac.value.toLowerCase() === facilitators[i]){
            facError.style.display = 'none';
            match = true;
        }
    }
    // facilitator = no match 
    if (!match){
        e.preventDefault();
        errorHandling(fac);
        return false;
    }
}

document.querySelector('form').addEventListener('submit', validateForm);