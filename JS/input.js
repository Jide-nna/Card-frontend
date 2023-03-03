let form = document.querySelector(".form")
let cardName = document.getElementById("cardholder-name")
let error = document.querySelector("small")
let button = document.getElementById("confirm")
let cardNameValue = cardName.value
//console.log(cardNameValue)
button.addEventListener("submit", function(e) {
    e.preventDefault()
    errorMessage()
})

function errorMessage() {
    if(cardNameValue =="") {
        console.log("works")
    }
}