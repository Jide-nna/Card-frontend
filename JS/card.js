let form = document.getElementById("myForm");
let cardName = document.getElementById("cardholder-name");
let cardNumber = document.querySelector("#card-number");
let expMonth = document.querySelector("#card-exp-month");
let expYear = document.querySelector("#card-exp-year");
let cvc = document.querySelector("#card-cvc");
let errorText = document.querySelector("small");
let cardNames = document.querySelector("#cardholder-name");
let cardNumbers = document.querySelector("#card-number");
let expMonths = document.querySelector("#card-exp-month");
let expYears = document.querySelector("#card-exp-year");
let cvcs = document.querySelector("#card-cvc");
let names = document.querySelector(".names");
let details = document.querySelector(".detail");
let cardBack = document.querySelector(".card_back");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let rightSide = document.querySelector(".right");
let complete = document.querySelector(".complete");
form.addEventListener("submit", function () {
  e.preventDefault()
  //validate();
   cardNameValidation()
    cardNumberValidation()
    expMonthValidation()
    expYearValidation()
    cardCVCValidation() 
    inputing()
        completing()
});

function validation() {
  cardNameValidation() ||
    cardNumberValidation() ||
    expMonthValidation() ||
    expYearValidation() ||
    cardCVCValidation();
}
function validate() {
  if (
    cardNameValidation() &&
    cardNumberValidation() &&
    expMonthValidation() &&
    expYearValidation() &&
    cardCVCValidation() == true
  ) {
    inputing();
    completing();
  }
}

function completing() {
  rightSide.style.display = "none";
  complete.style.display = "block";
}
function cardNameValidation() {
  if (cardName.value == "") {
    //errorText.textContent = "You must fill this field"
    //errorText.style.color = "red"
    cardName.style.borderColor = "red";
  } else {
    //errorText.textContent = "Congratulation"
    //errorText.style.color = "green"
    cardName.style.borderColor = "hsl(279, 6%, 55%)";
  }
}
function cardNumberValidation() {
  if (cardNumber.value == "") {
    //  errorText.textContent = "You must fill this field"
    //  errorText.style.color = "red"
    cardNumber.style.borderColor = "red";
  } else {
    //  errorText.textContent = "Congratulation"
    //  errorText.style.color = "green"
    cardNumber.style.borderColor = "hsl(279, 6%, 55%)";
  }
}
function expMonthValidation() {
  if (expMonth.value == "") {
    //errorText.textContent = "You must fill this field"
    // errorText.style.color = "red"
    expMonth.style.borderColor = "red";
  } else if (expMonth.value.length > 2) {
    expMonth.style.borderColor = "red";
  } else {
    // errorText.textContent = "Congratulation"
    // errorText.style.color = "none"
    expMonth.style.borderColor = "hsl(279, 6%, 55%)";
  }
}
function expYearValidation() {
  if (expYear.value == "") {
    // errorText.textContent = "You must fill this field"
    // errorText.style.color = "red"
    expYear.style.borderColor = "red";
  } else if (expYear.value.length > 2) {
    expYear.style.borderColor = "red";
  } else {
    //errorText.textContent = "Congratulation"
    //errorText.style.color = "none"
    expYear.style.borderColor = "hsl(279, 6%, 55%)";
  }
}
function cardCVCValidation() {
  if (cvc.value == "") {
    //errorText.textContent = "You must fill this field"
    // errorText.style.color = "red"
    cvc.style.borderColor = "red";
  } else if (cvc.value.length > 3) {
    cvc.style.borderColor = "red";
  } else {
    //  errorText.textContent = "Congratulation"
    // errorText.style.color = "none"
    cvc.style.borderColor = "hsl(279, 6%, 55%)";
  }
}
function inputing() {
  let updateName = (names.textContent = cardNames.value);
  let updateCardNumber = (details.textContent = cardNumbers.value);
  let updateCVC = (cardBack.textContent = cvcs.value);
  let updateMonth = (month.textContent = expMonths.value);
  let updateYear = (year.textContent = expYears.value);
}
