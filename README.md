# web-mastermind

HTML Changes from 1/29
1. Change HTML Button initial text to "Color Picker"

WebHelper Changes from 1/29:
1. Separate setup() from new function called startGame()
2. Change button text in setup() to "Start Game"
3. Change setup onclick function to buttonElement.onclick = function(){startGame()};
4. put setCode in startGame
5. Compose startMessage in startGame: Code created, select guess below. 
6. Change button text in startGame() to "Submit Color Choices"
7. Delete functions story(text), setOptions, delayText 
8. Create stub function getGuessStub()

WebHelper Changes from 1/31:
1. Create newGetGuess to replace getGuessStub (and not interfere with mastermind.js getGuess)
2. Create loop in newGetGuess to read guesses. 
3. Use guess[i]=g.options[g.selectedIndex].value to get the value of each guess. 
4. Output the guess array to board, with .join(" ") to clean out commas. 
5. Get confused about next steps (oops!)

WebHelper Changes from 2/1:
1. Move globals from Mastermind.js to webhelper.js
2. Remove turn=0;
3. Create function masterMain and pass guess to it
4. Move board writing into masterMain
5. Added the || separator to alertString
6. Make sure code is passed and received by all functions within a game
7. Set feeback equal to the testGuess feedback function, sending it code and guess
8. Concat feedback with alertString, joining feedback with " "
