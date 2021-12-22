//Variables
const display = document.getElementById('output');



//Object holding all of our data
const calculator = {
  'value': '0', //Sets default display value to 0 
  'firstOperand': null, // Set first Operand to Null 
  'waitingForSecondOperand': false, // Waits for second operand (Needs first and operator). Only then will it return true then the next input will be classed as the second Operand 
  'operator': null // sets Operator to Null 
} 




function inputDigit(digit){
if (calculator.waitingForSecondOperand === true){ // if this is true then it means any number inputted will be classed as the second operand 
  calculator.value = digit 
  calculator.waitingForSecondOperand = false
} else  {
calculator.value === '0' ? calculator.value = digit : calculator.value = calculator.value + digit
}
console.log(calculator)
}

function displayValue (){
  display.innerHTML = calculator.value //value from Calculator object 
}

function allClear(){
  calculator.value = "0"
  calculator.firstOperand = null
  calculator.waitingForSecondOperand = false
  calculator.operator = null
  console.log(calculator)
}

function cancelBtn(){
  if (calculator.value.length === 1){
    allClear()
  } else {
    calculator.value = calculator.value.slice(0, -1)
    display.innerHTML = calculator.value
  }
}

function inputDecimal(targetId){
  if (calculator.waitingForSecondOperand === true) { // fixes the bug so youre able to hit a decimal point after pressing an operator. the decimal point will now count as the second operand 
  	calculator.value = '0.'
    calculator.waitingForSecondOperand = false;
    console.log(calculator)
    return
  }
  if(!calculator.value.includes(targetId)){
    calculator.value = calculator.value + targetId
    display.innerHTML = calculator.value}
}

//when the user presses an operator after entering first operand
function handleOperator(nextOperator){
  const inputValue = parseFloat(calculator.value) //converts string to number (incl. the decimal)
  
  if(calculator.firstOperand == null && !isNaN(calculator.value)){ //checks if first operand is empty and is not an 'NaN' value 
    calculator.firstOperand = inputValue // pushes value to first operand 
  } else if (calculator.operator != null){ //checks if theres an oparator (operater is not equal to null)
    let result = calculateSum(calculator.firstOperand, inputValue, calculator.operator)
    console.log(result)
    calculator.firstOperand = result // makes the first operand the result so the user can continue calculation is need be
    calculator.value = parseFloat(result.toFixed(7)); // makes sure theres no extra 0's . i.e before adding this line, 0.2 + 0.1 would = 0.300000004
    
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator
  console.log(calculator)

  //displayValue()
}

function calculateSum(firstOperand, secondOperand, operator){
  if (operator === '+'){
    console.log('hi')
    return firstOperand + secondOperand
  } else if (operator === '-'){
    return firstOperand - secondOperand
  } else if (operator === '*'){
   return  firstOperand * secondOperand
  } if (operator === '/'){
    return firstOperand / secondOperand
  }
  return secondOperand
}


displayValue()

// Event Listeners that checks which key was pressed
 const keys = document.querySelector('.btns')

 keys.addEventListener('click', function(e){
  const {target} = e //equiv to const target = event.target
  
  //check if operator was clicked 
  if(target.classList.contains('op')){
    handleOperator(target.value)
    //console.log(target.value)
    //console.log('operator:', target.id);
    displayValue()
    return;
  }

  // decimal
  if(target.classList.contains('decimal')){
    //console.log(target.id);
    inputDecimal(target.value)
    displayValue()
  }

  // Check if number was clicked 
   if(target.classList.contains('number')){
     //console.log('number:', target.innerHTML);
     inputDigit(target.innerHTML)
    }
    //check if cancel btn was clicked 
    if(target.classList.contains('cancel')){
      //console.log(target.id);
      cancelBtn()
      return;
    }
    //check if ac-btn was clicked 
    if(target.classList.contains('ac')){
      //console.log(target.id);
      allClear()
      displayValue()
      return;
    }
    
   

   displayValue()
 })





