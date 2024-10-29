var btnTopRow = ['/','x','-','+'];
var btnOptions = ['7','8','9','4','5','6','1','2','3','0','.','CE'];
var btnArr = document.querySelector("#BtnArr");

generateNumPad();

function generateNumPad()
{
    let iterator = 0;
    btnTopRow.forEach(value => createButtons(value));
    btnOptions.forEach(value => createButtons(value));
}

function createButtons(value)
{
    let newBtn = document.createElement("button");
    newBtn.textContent = value;
    btnArr.appendChild(newBtn);
}