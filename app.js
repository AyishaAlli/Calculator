//Variables

const acBtn = document.getElementById('ac-btn');
const clearBtn = document.getElementById('clear-btn');
const eachNumber = document.querySelectorAll('[data-number]');
const keys = document.querySelector('.btns');


//Numbers
acBtn.addEventListener('click', function(){
  console.log('works!')
})

const calculator = {
  'displayValue': '0',
  'firstOperand': null,
  'waitingForSecondOpeerand': false,
  'operator': null
} 

function displayValue (){
  let output = document.getElementById('output');
  output.innerHTML = calculator['displayValue']

}

displayValue()

keys.addEventListener('click', function(e){
  const {target} = e
 console.log(e) 

})

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


