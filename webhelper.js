var buttonElement = document.getElementById("submit-guess");

window.onload = start;

function start() {
    setup();
}

function setup() {
	var welcome="<h1>Welcome to Mastermind!</h1>\n<p>Here are instructions.</p>"+code;
    var buttonElement = document.getElementById("submit-guess");
	buttonElement.innerHTML = "Start Game"; 
	var board = document.getElementById("board");
	board.innerHTML=welcome;
	buttonElement.onclick = function(){startGame()};
}

function startGame() {
	code=setCode(colors); 
	var startMessage="<h1>Secret Code Created</h1>\n<p>Select your guess below.</p>";
	var buttonElement = document.getElementById("submit-guess");
	buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board");
	board.innerHTML=startMessage;
	buttonElement.onclick = function(){getGuessStub()};
	}


function getGuessStub(){
	var board = document.getElementById("board");
	var alertString ="This is where the guess and feedback goes.";
	board.innerHTML=alertString;
}
