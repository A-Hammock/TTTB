var markers = [
  '<img src= "https://i.postimg.cc/5y7dYZ3N/tk.png">',
  '<img src= "https://i.postimg.cc/5y7dYZ3N/tk.png">'
];
//var players = [];
var players = [“Bro”, “Carolla”]; 
var totals = [];
var winCodes = 
	[7,56,73,84,146,273,292,448];
var whoseTurn = 0;
var gameOver = false;
var speed = [2, 2];


// Play again button
function restartGame()
{
	
	startGame();
}
function startGame() // Choose your names, and display them in the header message.
{
	// makes board spin initially
	document.getElementById("game-board").style.animation = "rotation 4s infinite linear";
	//players[0] = prompt("Player 1 NAME:");
	//players[1] = prompt("Player 2 NAME:");
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <=3; i++)
	{
		innerDivs += '<div id="row-' + i + '">';
		
		for (j = 1; j <= 3; j++)
		{
			innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
			counter *= 2;
		}
		innerDivs += '</div>';
	}
	
	document.getElementById("game-board").innerHTML = innerDivs;
	totals = [0, 0];
	gameOver = false;
	document.getElementById("game-message").innerText = "IT'S YOUR TURN " + players[whoseTurn];
}

function playGame(clickedDiv, divValue)
{
	if (!gameOver)
	{	
	// changes speed depending on how many turns each player has done
	speed[whoseTurn]++;
	document.getElementById("game-board").style.animation = "rotation "+  8 / speed[whoseTurn] + "s infinite linear";
	
		// Adds X or O depending on whoseTurn
		clickedDiv.innerHTML = markers[whoseTurn]; 
		
		// adds up total each time a player "moves" to track a win condition
		totals[whoseTurn] += divValue;
		
		// calls isWin() function to see if someone won
		if (isWin())
		{
			document.getElementById("game-message").innerText = "WOW VERY COOL " + players[whoseTurn] + " YOU WON";
			document.getElementById("game-board").style.animation = "slide 2s forwards, rotation "+  8 / speed[whoseTurn] + "s infinite linear";
		}
		else if (gameOver)
		{
			document.getElementById("game-message").innerText = "YOU BOTH FAILED";
		}
		else
		{
		// Switches turn each click
		if (whoseTurn) whoseTurn = 0; else whoseTurn = 1; 
		
		// disables onclick tag after clicked so it cannot be used >1 times.
		clickedDiv.attributes["0"].nodeValue = ""; 
		
		// Displays text for which turn it is
		document.getElementById("game-message").innerText = "IT'S YOUR TURN " + players[whoseTurn];
		}
	}
}

// win code logic
function isWin()
{
	for (i = 0; i < winCodes.length; i++)
	{
		if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {gameOver = true;  return true;}
	}
	if (totals[0] + totals[1] == 511) {gameOver = true;}
	
	return false;
function backgroundimg () {
	document.body.style.backgroundImage = "url(https://i.postimg.cc/RZpkQb7F/bg.png)";
	}
