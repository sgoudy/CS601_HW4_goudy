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
 * Form Validation
 * @param {e} e 
 * @returns 
 */
function validateForm(e){
    e.preventDefault();
    const fName = document.getElementById('firstName');
    const lName = document.getElementById('lastName');
    const fac = document.getElementById('facilitator');
    const ima = document.querySelector('input[name="status"]:checked');
    const skills = document.querySelectorAll('.checkbox:checked');
    const regex = /^[A-Za-z]+$/;

    if (fName.value.length < 2 ){
        alert('The first name must be at least 2 letters.')
        return false;
    } 
    if (lName.value.length < 2){
        alert('The last name must be at least 2 letters.')
        return false;
    }
    if (!fName.value.match(regex) || !lName.value.match(regex)){
        alert('The name fields should not contain anything but letters.')
        return false;
    }
    
    console.log(fName.value.length);    
    console.log(lName.value);    
    console.log(fac.value); 
    console.log(ima.value);
    if (skills.length > 0){
        for (let i = 0; i<skills.length; i++){
            console.log(skills[i].value)
        }
    } else {
        console.log(skills.value);
    }

    let match = false;
    const facilitators = ['adam', 'christian', 'josh']
    for (let i = 0; i<facilitators.length; i++){
        if (fac.value.toLowerCase() === facilitators[i]){
            match = true;
        }
    }
    if (!match){
        alert('Invalid facilitator entry, please try again.')
    }

}

document.querySelector('form').addEventListener('submit', validateForm);