var topRowValues = ['÷','*','-','+'];
var numPadValues = ['7','8','9','4','5','6','1','2','3','0'];
var topRowElement = document.querySelector("#TopRow");
var numPadElemenet = document.querySelector("#NumPad");

var inputString = document.querySelector ("#InputAsString");
var resultString = document.querySelector ("#UserResultCalc");

var calculation = [
    { id: 'number' , val: '123' }];

generateNumPad();
clearEverything();



function generateNumPad()
{
    topRowValues.forEach(value => createButtons(value, topRowElement, operatorPressed));
    numPadValues.forEach(value => createButtons(value, numPadElemenet, numberPressed));
    createButtons('.', numPadElemenet, numberPressed);
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
    let index =  calculation.length-1;
    let newNumber = calculation[index].id != 'number';
    console.log(newNumber);
    let isDecimal = value == '.';

    if(newNumber) {
        if(isDecimal) value = '0.';
        calculation.push({id: 'number', val: value});
    }
    else if(isDecimal && calculation[index].val.search(".") == -1) {
        calculation[index].val += value;
    }
    else {
        calculation[index].val += value;
    }

    inputUpdate();
}

function operatorPressed(value)
{
    let index =  calculation.length-1;
    if(calculation[index].id == 'operator')
    {
        calculation[index].val = value;
    }
    else { 
        calculation.push({id: 'operator',val: value});
    }
    inputUpdate();
}

function equalPressed()
{

}

function clearEverything(value)
{
    calculation = [{id: 'number', val: ''}];
    inputUpdate();
}

function inputUpdate()
{
    inputString.textContent = '';

    let sum = calculation[0].val;
    let operator = '';

    calculation.forEach(element => {
        inputString.textContent += element.val + ' ';
        
        if(element.id == 'operator') {
            operator = element.val;
        }
        else if(element.id == 'number' && operator != '') {
            sum = runCalculation(sum, operator, element.val);
            operator = '';
        }
    });

    resultString.textContent = Math.round(sum*100)/100;
}

function runCalculation(sum, operator, val)
{
    sum = parseFloat(sum);
    val = parseFloat(val);

    console.log(operator);
    console.log(operator == '+');

    switch(operator)
    {
        default:
            console.log("Something Broke")
            break;
        case '+':
            return sum + val;
        case '-':
            return sum - val;
        case '*':
            return sum * val;
        case '÷':
            if(sum == 0 || val == 0)
            {
                return "NaN";
            }
            return sum / val;
    }
}