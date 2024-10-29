var topRowValues = ['/','x','-','+'];
var numPadValues = ['7','8','9','4','5','6','1','2','3','0'];
var topRowElement = document.querySelector("#TopRow");
var numPadElemenet = document.querySelector("#NumPad");

var inputString = document.querySelector ("#InputAsString");
var resultString = document.querySelector ("#UserResultCalc");

var numX = '', numY = '';


generateNumPad();

function generateNumPad()
{
    let iterator = 0;
    topRowValues.forEach(value => createButtons(value, topRowElement, operatorPressed));
    numPadValues.forEach(value => createButtons(value, numPadElemenet, numberPressed));
    createButtons('.', numPadElemenet, decimalPressed);
    createButtons('CE', numPadElemenet, clearEverything);
}

function createButtons(value, element, func)
{
    let newBtn = document.createElement("button");
    newBtn.textContent = value;
    newBtn.onclick = () => func(value);
    element.appendChild(newBtn);
}

function numberPressed(value)
{
    inputString.textContent += value;
}

function operatorPressed(value)
{
    
}

function equalPressed()
{

}

function decimalPressed(value)
{
    
}

function clearEverything(value)
{
    inputString.textContent = '';
    resultString.textContent = '';
}