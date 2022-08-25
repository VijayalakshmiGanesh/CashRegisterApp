var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var check = document.querySelector("#submit")
var notes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#msg");
var resetBtn = document.querySelector("#reset")

check.addEventListener("click", clickHandler);
resetBtn.addEventListener("click", () => window.location.reload());
const money = [2000, 500, 200, 100, 50, 10, 5, 2, 1];


function clickHandler() {

    if (billAmount.value == '' || cashGiven.value == '') {
        alert("Enter all neccessary values")
        return
    } else if (billAmount.value <= 0 || cashGiven.value < 0) {
        alert("Enter proper values")
        return
    }
    message.style.display = "none";

    billAmount = billAmount.value;
    cashGiven = cashGiven.value;
    var amountToBeReturned = cashGiven - billAmount;

    console.log(billAmount, cashGiven, amountToBeReturned)
    if (amountToBeReturned == 0) {
        showMessage("No Return change required ");
    } else if (amountToBeReturned < 0) {
        showMessage("Ready to wash the plates ...? ");
    } else {
        showMessage("Amount to be returned is ₹" + amountToBeReturned)
        calculate(amountToBeReturned);
    }

}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculate(amountToBeReturned) {

    for (let i = 0; i < money.length; i++) {
        noOfNotes = Math.trunc(amountToBeReturned / money[i]);
        amountToBeReturned %= money[i];
        notes[i].innerText = noOfNotes;

    }

}