/* 
A	= 	final amount
P	= 	initial principal balance
r	= 	interest rate
n	= 	number of times interest applied per time period
t	= 	number of time periods elapsed 
A = P (1 + r/n)nt
*/
function compoundInterest(initialAmount,interestRate,numberOfTimePeriods,amountInterestApplied) {
    return initialAmount * (1 + (interestRate/numberOfTimePeriods)) **( amountInterestApplied * numberOfTimePeriods);  
}

let calculatorForm = document.getElementById('calculator-form');
let inputX = document.getElementById('number-x');
let inputY = document.getElementById('number-y');
let resultElement = document.getElementById('result');

let initialAmount = document.getElementById('initialAmount');
let interestRate = document.getElementById('interestRate');
let numberOfTimePeriods = document.getElementById('numberOfTimePeriods');
let amountInterestApplied = document.getElementById('amountInterestApplied');


function onSubmit(event) {
    event.preventDefault();
    resultElement.innerHTML=compoundInterest(initialAmount,interestRate,numberOfTimePeriods,amountInterestApplied);
    console.log('mortage',compoundInterest(initialAmount,interestRate,numberOfTimePeriods,amountInterestApplied))
}


function onCalculate (event) {
        event.preventDefault();

        console.log (inputX.value);
        console.log (inputY.value);

        let sum = Number(inputX.value) + Number(inputY.value);
        console.log(sum);
        resultElement.innerHTML = sum;
}


console.log(calculatorForm);


calculatorForm.onsubmit = onSubmit;








