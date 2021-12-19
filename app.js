//Variables
const display = document.getElementById('output');



//Object holding all of our data
const calculator = {
  'value': '0', //Sets default display value to 0 
  'firstOperand': null, // Set first Operand to Null 
  'waitingForSecondOpeerand': false, // Waits for second operand (Needs first and operator). Only then will it return true then the next input will be classed as the second Operand 
  'operator': 'null' // sets Operator to Null 
} 

//shorthand for writing the above object - Destructing 
let {value, firstOperand, waitingForSecondOpeerand, operator} = calculator


function inputDigit(digit){
  value === '0' ? value = digit : value = value + digit; // if display is 0, then adds number clicked, otherwise concats the number to existing number(s)
}

function displayValue (){
  display.innerHTML = value //value from Calculator object 
}

function allClear(){
  value = "0"
  firstOperand = null
  waitingForSecondOpeerand = false
  operator = null
  display.innerHTML = value
}

function cancelBtn(){
  if (value.length === 1){
    allClear()
  } else {
    value = value.slice(0, -1)
    display.innerHTML = value
  }
  
}

displayValue()

// Event Listeners that checks which key was pressed
 const keys = document.querySelector('.btns')

 keys.addEventListener('click', function(e){
  const {target} = e //equiv to const target = event.target
  
  //check if operator was clicked 
  if(target.classList.contains('op')){
    console.log('operator:', target.id);
    return;
  }

  // Check if number was clicked 
   if(target.classList.contains('number')){
     console.log('number:', target.innerHTML);
     inputDigit(target.innerHTML)
    }
    //check if cancel btn was clicked 
    if(target.classList.contains('cancel')){
      console.log(target.id);
      cancelBtn()
      return;
    }
    //check if ac-btn was clicked 
    if(target.classList.contains('ac')){
      console.log(target.id);
      allClear()
      return;
    }
    
   

   displayValue()
 })





// document.querySelector('.btns').addEventListener('click', function(e){
//   const {target} = e //equiv to const target = event.target

//   //AC BUTTON 
//   if (target.classList.contains('ac')){
//     value = '0' 
//     firstOperand = null
//     waitingForSecondOpeerand = false
//     operator = null
//     display.innerHTML = value
//   }

//   //CLEAR BUTTON TODO 
  
//   if (target.classList.contains('op')){ //checks if operator was clicked 
//     console.log('Operator:', target.id) //shows what was clicked
//     target.classList.add('isDepressed')
//   }
  
//   // INPUTTING NUMBER 
//   if(target.classList.contains('number')){
//     console.log('number:', target.innerHTML)
//     return;
//   }
  

//     // TODDO : need to make sure that the other number after the operator is counted as the second operand 
//   if(target.classList.contains('op')){
//     if (target.id === 'add-btn'){
//       operator = '+' 
//       value = value + operator
//       display.innerHTML = value

//     } else if ( target.id === 'division-btn'){
//       operator.replace(operator, '/') 
//       value = value + operator
//       display.innerHTML = value
//     console.log(display.innerHTML)
//   }} 

//   //DECIMAL PLACE
//   if(target.id === 'decimal-btn'){
//     value = value + '.'
//     display.innerHTML = value

//   }
//   })


