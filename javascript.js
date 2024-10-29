var topRowValues = ['/','x','-','+'];
var numPadValues = ['7','8','9','4','5','6','1','2','3','0','.','CE'];
var topRowElement = document.querySelector("#TopRow");
var numPadElemenet = document.querySelector("#NumPad");

generateNumPad();

function generateNumPad()
{
    let iterator = 0;
    topRowValues.forEach(value => createButtons(value, topRowElement));
    numPadValues.forEach(value => createButtons(value, numPadElemenet));
}

function createButtons(value, element)
{
    let newBtn = document.createElement("button");
    newBtn.textContent = value;
    element.appendChild(newBtn);
}