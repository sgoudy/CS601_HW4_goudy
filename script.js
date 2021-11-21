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
    
    // calculator
    calculator();
    function calculator (){
        let firstNum = "";
        let secondNum = "";
        
        // check for number value
        while (isNaN(firstNum) || firstNum == ""){
            firstNum = prompt('Please enter a number: ');
        }
        while (isNaN(secondNum) || secondNum == ""){
            secondNum = prompt('Please enter another number: ');
        }

        // sum the two values
        const total = firstNum + secondNum;
        
        // using concatenation instead of ES6
        alert('The sum of your two numbers is ' + total + '.');
        
        // conditional statement to check for size
        if (total > 10){
            alert("That is a big number!");
        } else {
            alert("That is a small number.");
        }
    }

    // loop with prompt
    while(true){
        const response = prompt('Would you like to add 2 different numbers? (y/n)');
        // check for no or empty answer, if so, exit
        if (response === "" || response.toLowerCase() === 'n' || response.toLowerCase() === 'no'){
        break;
        // if yes
        } else {
        calculator();
        }
    }
    alert("Thanks for playing!");
}