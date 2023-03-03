let button = document.querySelector("#confirm");
let cardName = document.querySelector("#cardholder-name");
let cardNumber = document.querySelector("#card-number");
let expMonth = document.querySelector("#card-exp-month");
let expYear = document.querySelector("#card-exp-year");
let cvc = document.querySelector("#card-cvc");
let names = document.querySelector(".names");
let details = document.querySelector(".detail");
let cardBack = document.querySelector(".card_back");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let rightSide = document.querySelector(".right");
let complete = document.querySelector(".complete");
let small = document.querySelector("small")
let nameValue = cardName.value;
//console.log(nameValue + "works")
let cardNumberValue = cardNumber.value;
let cvcValue = cvc.value;
let monthValue = expMonth.value;
let yearValue = expYear.value;

button.addEventListener("click", function() {
  inputing()
  //console.log("works")
})
 function inputing() {
  let updateName = (names.textContent = nameValue);
  console.log(updateName + "Works")
   let updateCardNumber = (details.textContent = cardNumberValue);
  let updateCVC = (cardBack.textContent = cvcValue);
  let updateMonth = (month.textContent = monthValue);
  let updateYear = (year.textContent = yearValue);
}
/* function checkCardNumber() {
 if (numberValue == "") {
    showError(cardNumber, "card number cannot be blank")
}
else {
    showSuccess(cardNumber)
}
}
function checkName() {
    if (naValue == "") {
        showError(name , "card name cannot be blank")
    }
    else {
        showSuccess(expMonth)
    }
}
function checkMonth() {
    if (monValue == "") {
       showError(expMonth, "Month cannot be blank")
   }
   else {
       showSuccess(expMonth)
   }
   }
  
   function checkYear() {
    if ( yeValue== "") {
       showError(expYear, "card Year cannot be blank")
   }
   else {
       showSuccess(expYear)
   }
   }
   function checkCVC() {
    if ( CVCValue=="") {
       showError(cvc, "card cvc cannot be blank")
   }
   else {
       showSuccess(cvc)
   }
   }

function showError(input, message) {
    input.classList.remove('success');
    input.classList.add('error');
    //console.log('error')

    // show the error message
    small.textContent = message;
};
function showSuccess(input){
    // get the form-field element

    // remove the error class
    input.classList.remove('error');
    input.classList.add('success');

    // hide the error message
    small.textContent = '';
} */