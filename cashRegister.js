var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var check = document.querySelector("#submit")
var notes = document.querySelectorAll(".no-of-notes");
var message = document.querySelector("#msg");

check.addEventListener("click", clickHandler);
const money = [2000, 500, 200, 100, 50, 10, 5, 1];


function clickHandler() {
    message.style.display = "none";

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            let amountToBeReturned = cashGiven.value - billAmount.value;
            calculate(amountToBeReturned);
        } else {
            showMessage("Ready to wash the plates ...? ");
        }
    } else {
        showMessage("Invalid amount");
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