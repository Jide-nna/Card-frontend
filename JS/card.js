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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  Validation();
});

function Validation() {
  if (cardName.value == "") {
    //errorText.textContent = "You must fill this field"
    //errorText.style.color = "hsl(0, 100%, 66%);"
    cardName.style.borderColor = "hsl(0, 100%, 66%)";
  }
  if (cardNumber.value == "") {
     // errorText.textContent = "You must fill this field"
    //  errorText.style.color = "hsl(0, 100%, 66%);"
    cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
  }
  if (expMonth.value == "") {
    // errorText.textContent = "You must fill this field"
    // errorText.style.color = "hsl(0, 100%, 66%);"
    expMonth.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (expMonth.value.length > 2) {
    expMonth.style.borderColor = "hsl(0, 100%, 66%)";
  }
  if (expYear.value == "") {
    // errorText.textContent = "You must fill this field"
    // errorText.style.color = "hsl(0, 100%, 66%);"
    expYear.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (expYear.value.length > 2) {
    expYear.style.borderColor = "hsl(0, 100%, 66%)";
  }
  if (cvc.value == "") {
    //errorText.textContent = "You must fill this field"
    // errorText.style.color = "hsl(0, 100%, 66%);"
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (cvc.value.length > 3) {
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
  }
  else {
    inputing()
    completing()
  }
}
function inputing() {
  let updateName = (names.textContent = cardNames.value);
  let updateCardNumber = (details.textContent = cardNumbers.value);
  let updateCVC = (cardBack.textContent = cvcs.value);
  let updateMonth = (month.textContent = expMonths.value);
  let updateYear = (year.textContent = expYears.value);
}
function completing() {
  rightSide.style.display = "none";
  complete.style.display = "block";
}
