let form = document.getElementById("myForm")
let cardName = document.getElementById("cardholder-name")
let cardNumber = document.querySelector("#card-number");
let expMonth = document.querySelector("#card-exp-month");
let expYear = document.querySelector("#card-exp-year");
let cvc = document.querySelector("#card-cvc");
let errorText = document.querySelector("small")
form.addEventListener("submit", function() {
    cardNameValidation() 
    cardNumberValidation()
    expMonthValidation()
    expYearValidation()
    cardCVCValidation()
})

function cardNameValidation() {
    if(cardName.value =="") {
        //errorText.textContent = "You must fill this field"
        //errorText.style.color = "red"
        cardName.style.borderColor = "red"
    }
    else {
        //errorText.textContent = "Congratulation"
        //errorText.style.color = "green"
        cardName.style.borderColor = "white"
    }
}
function cardNumberValidation() {
    if(cardNumber.value =="") {
      //  errorText.textContent = "You must fill this field"
      //  errorText.style.color = "red"
        cardNumber.style.borderColor = "red"
    }
    else {
      //  errorText.textContent = "Congratulation"
      //  errorText.style.color = "green"
        cardNumber.style.borderColor = "white"
    }
}
function expMonthValidation() {
    if(expMonth.value =="") {
        //errorText.textContent = "You must fill this field"
       // errorText.style.color = "red"
        expMonth.style.borderColor = "red"
    }
    else {
       // errorText.textContent = "Congratulation"
       // errorText.style.color = "none"
        expMonth.style.borderColor = "white"
    }
}
function expYearValidation() {
    if(expYear.value =="") {
       // errorText.textContent = "You must fill this field"
       // errorText.style.color = "red"
        expYear.style.borderColor = "red"
    }
    else {
        //errorText.textContent = "Congratulation"
        //errorText.style.color = "none"
        expYear.style.borderColor = "white"
    }
}
function cardCVCValidation() {
    if(cvc.value =="") {
        //errorText.textContent = "You must fill this field"
       // errorText.style.color = "red"
        cvc.style.borderColor = "red"
    }
    else {
      //  errorText.textContent = "Congratulation"
       // errorText.style.color = "none"
        cvc.style.borderColor = "white"
    }
}