let masterMind = [
    {color: 'yellow', colorCode: 'rgb(240, 240, 98)', status: false},
    {color: 'red', colorCode: 'rgb(255, 72, 0)', status: false},
    {color: 'green', colorCode: 'rgb(102, 207, 102)', status: false},
    {color: 'blue', colorCode: 'rgb(72, 202, 235)', status: false},
    {color: 'dark-green', colorCode: 'rgb(0, 80, 56)', status: false},
    {color: 'purple', colorCode: 'rgb(105, 0, 105)', status: false},
];

var randArray = [];
var selectedColors = [];

for(let i = 0; randArray.length < 4; i++){
    // console.log('first length: '+ randArray.length);
    rand = Math.floor(Math.random() * 6);
    selectedColors.push(rand);
    if(selectedColors.length ===1){
        randArray.push(masterMind[rand]);
    }

    found = false;
    for(let i = 0; i <= randArray.length; i++){
        // console.log('length: '+ randArray.length);
        if(rand === selectedColors[i]){
            found = true;
        }
    }
    if(found === false){
        if(randArray[2] === masterMind[rand]){
            
        }
        else{
            randArray.push(masterMind[rand]);
            found = true;
        }
        // randArray[i].position = i+1;
    }
    // found = false;
}

console.log(randArray);
console.log(selectedColors);

// console.log(selectedColors);

let userInputs = [];
let correctPlaced = 0;
let wrongPlaced = 0;
let index = 1;


var selectCount = 1;
function choiceColour(colorCode){
    if(selectCount == 4){
        document.getElementById("select-buttons-" + index + selectCount).style.backgroundColor = colorCode;
        userInputs.push(colorCode);
        countChoices();
        
        selectCount = 1;
        index++;
        
        if(index === 11) {
            alert ("Game Over");
        }
        
        
        
    }
    else{
        document.getElementById("select-buttons-" + index + selectCount).style.backgroundColor = colorCode;
        userInputs.push(colorCode);
        selectCount++;
    }

}

function Warn() {
    alert ("You have won it");
}

let selectVerifiedCount = 1;
let selectVerifiedIndex = 1;


function countChoices(){
    for(let i = 0; i < userInputs.length; i++){
        if(userInputs[i] === randArray[i].colorCode){
                correctPlaced++;
        }
        for(let j = 0; j<randArray.length; j++){
            if(userInputs[i] === randArray[j].colorCode){
                if(i !== j){
                    wrongPlaced++;
                }
            }
        }
    }
    
    userInputs = [];

    fillVerifiedOffice();
    selectVerifiedIndex++;    
    
}


function fillVerifiedOffice(){
    for(let i = 0; i< correctPlaced; i++){
        document.getElementById("verfied-button-" + selectVerifiedIndex + selectVerifiedCount).style.backgroundColor = "black";
        selectVerifiedCount++;
    }
    for(let i = 0; i< wrongPlaced; i++){
        document.getElementById("verfied-button-" + selectVerifiedIndex + selectVerifiedCount).style.backgroundColor = "white";
        selectVerifiedCount++;
    }
    
    selectVerifiedCount = 1;
    if(correctPlaced == 4){
        Warn();
    }
    wrongPlaced = 0;
    correctPlaced = 0;
}

