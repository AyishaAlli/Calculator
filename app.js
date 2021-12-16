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
  'operator': null // sets Operator to Null 
} 
const {value, firstOperand, waitingForSecondOpeerand, operator} = calculator

function displayValue (){
  let output = document.getElementById('output');
  output.innerHTML = value //value from Calculator object 

}


keys.addEventListener('click', function(e){
  const {target} = e //gets target of click
  
  if (target.classList.contains('op')){
    
    console.log('Operator:', target.id)
  }
  
  if (target.classList.contains('number')){
    console.log('number:', target.innerHTML)
    if(calculator['firstOperand'] === null){
      firstOperand = target.innerHTML
      displayValue = firstOperand
    }
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


