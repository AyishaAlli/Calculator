//Variables

const acBtn = document.getElementById('ac-btn');
const clearBtn = document.getElementById('clear-btn');
const eachNumber = document.querySelectorAll('[data-number]');
const keys = document.querySelector('.btns');


//Numbers


const calculator = {
  'value': '0', //Sets default display value to 0 
  'firstOperand': null, // Set first Operand to Null 
  'waitingForSecondOpeerand': false, // Waits for second operand (Needs first and operator). Only then will it return true then the next input will be classed as the second Operand 
  'operator': 'null' // sets Operator to Null 
} 
let {value, firstOperand, waitingForSecondOpeerand, operator} = calculator

function displayValue (){
  let output = document.getElementById('output');
  output.innerHTML = value //value from Calculator object 

}


keys.addEventListener('click', function(e){
  const {target} = e //gets target of click

  //AC BUTTON 
  if (target.classList.contains('ac')){
    value = 0 
    firstOperand = null
    waitingForSecondOpeerand = false
    operator = null
    output.innerHTML = value
  }

  //CLEAR BUTTON TODO 
  
  if (target.classList.contains('op')){ //checks if operator was clicked 
    console.log('Operator:', target.id) //shows what was clicked
  }
  
  // INPUTTING NUMBER 
  if (target.classList.contains('number')){ //checks if number was clicked 
    console.log('number:', target.innerHTML) //shows what number was clicked 

    if(firstOperand === null){ // if firstOperand is empty 
      firstOperand = target.innerHTML // the innerHTML of target will become firstOperand
      value = firstOperand
      output.innerHTML = value
      
    } else if (firstOperand != null){ // every number pressed after will be added to the previous number 
      value = value+target.innerHTML
      console.log( firstOperand ) 
      output.innerHTML = value

    } 
  }

// TODDO : need to make sure that the other number after the operator is counted as the second operand 
  if(target.classList.contains('op')){
    if (target.id === 'add-btn'){
      operator = '+' 
      value = value + operator
      output.innerHTML = value

    } else if ( target.id === 'division-btn'){
      operator.replace(operator, '/') 
      value = value + operator
      output.innerHTML = value
    console.log(output.innerHTML)
  }} 

  //DECIMAL PLACE
  if(target.id === 'decimal-btn'){
    value = value + '.'
    output.innerHTML = value

  }
  
})

displayValue()

/*
// Event Listeners

acBtn.addEventListener('click', function () {
  output.innerHTML = '0';
});
clearBtn.addEventListener('click', function () {
  output.innerHTML = '0';
});

function displayButton(button) {
  output.innerHTML = button.innerHTML;
}
 */


