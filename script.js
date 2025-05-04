let userInput = prompt("Enter a number please:");

while (isNaN(userInput))
{
    userInput = prompt("Please enter a NUMBER:");
}

userInput = Number(userInput);
let resultStr = "";

if (userInput % 2 === 0) 
{
    for (let row = userInput; row > 0; row--)
    {
        for (let col = 1; col <= row; col++)
        {
            resultStr += row + " ";
        }
        resultStr += "<br>";
    }

} 
else
{
    for (let row = userInput; row > 0; row--)
    {
        for (let col = 0; col < userInput; col++)
        {   
            resultStr += row + " ";
        }
        resultStr += "<br>";
    }
}

document.getElementById("output").innerHTML = resultStr;


let theBINN = [];

function updateList() 
{
    document.getElementById("listahan").innerHTML = theBINN.join("<br>");
}

function removeOne()
{
    theBINN.pop();
    
    updateList();
}

function addOne() 
{
    let newName = document.getElementById("name").value;
    
    if (newName === "") return;
    
    if (theBINN.length == 7) 
    {
        theBINN.shift(); 
    }
    
    theBINN.push(newName);
    
    document.getElementById("name").value = "";
    
    updateList();
}
