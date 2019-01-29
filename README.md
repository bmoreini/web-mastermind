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
