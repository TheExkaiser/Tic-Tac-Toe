var gameFields = document.getElementsByClassName('gameField');
var turn = 'O';
var draw = false;
var availableFields = 9;
var gameEnded = false;

console.log("script is working");

randomizeTurn()
showTurn()

for (var i = 0; i < gameFields.length; i++) //Add events to fields
{
    gameFields[i].value = i;
    gameFields[i].addEventListener("click", gameFieldClick);
}

function showTurn()
{
    if (!gameEnded)
    {
        document.getElementById('resultWin').innerHTML = "Now it's "+turn+"'s turn";
    }
}

function gameFieldClick()
{   
    if (document.activeElement.value != 'X' && document.activeElement.value != 'O' && !gameEnded)
    {
        document.activeElement.value = turn;    //assign 'turn' variable as clicked field value
        document.activeElement.style.fontSize = "3em";

        endCheck()                                 //checks if the game has ended
        changeTurn()
        drawCheck()

        showTurn()                                  //shows who's turn is it    

    }
}

function endCheck()
{
    if(gameFields[0].value === gameFields[1].value && gameFields[1].value === gameFields[2].value)
    {
        endGame();
    }
    else if(gameFields[3].value === gameFields[4].value && gameFields[4].value === gameFields[5].value)    
    {
        endGame();
    }
    else if(gameFields[6].value === gameFields[7].value && gameFields[7].value === gameFields[8].value)
    {
        endGame();
    }
    else if(gameFields[0].value === gameFields[3].value && gameFields[3].value === gameFields[6].value)    
    {
        endGame();
    }    
    else if(gameFields[1].value === gameFields[4].value && gameFields[4].value === gameFields[7].value)    
    {
        endGame();
    }
    else if(gameFields[2].value === gameFields[5].value && gameFields[5].value === gameFields[8].value)    
    {
        endGame();
    }
    else if(gameFields[0].value === gameFields[4].value && gameFields[4].value === gameFields[8].value)    
    {
        endGame();
    }
    else if(gameFields[2].value === gameFields[4].value && gameFields[4].value === gameFields[6].value)    
    {
        endGame();
    }
    else if(availableFields == 0)
    {
        endGame();
    }
}

function endGame()
{
    console.log("game has ended");
    gameEnded = true;
    availableFields = 0;

    if (draw == true)
    {
        document.getElementById('resultWin').innerHTML ="DRAW!";
    }
    else
    {
        document.getElementById('resultWin').innerHTML = turn + "'s Won!";
    }

}

function drawCheck()
{
    availableFields = 0;
    for (var i = 0; i < gameFields.length; i++)
    {
        if (gameFields[i].value != 'X' && gameFields[i].value != 'O')
        {
            availableFields++;
        }
    }
    console.log(availableFields)

    if (availableFields == 0)
    {
        draw = true;
    }
}

function randomizeTurn()
{
    let d = new Date();
    let rand = d.getMilliseconds();
    if (rand%2 == 0)
    {
    turn = 'X';
    }
}

function changeTurn()//switches 'turn' variable
{
    if (turn != 'X')                            
    {
        turn = 'X';
    }
    else
    {
        turn = 'O';
    }
}
