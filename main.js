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

let calculatorForm = document.getElementById('mortage-calculator');
let loanAmount = document.getElementById('loan-amount');
let loanTerm = document.getElementById('loan-term');
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

        console.log (inputloanAmount.value);
        console.log (inputloanTerm.value);

        let sum = Number(inputloanAmount.value) + Number(inputloanTerm.value);
        console.log(sum);
        resultElement.innerHTML = sum;
}


console.log(calculatorForm);


calculatorForm.onsubmit = onSubmit;








