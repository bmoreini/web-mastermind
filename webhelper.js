var buttonElement = document.getElementById("submit-guess");

window.onload = start;

function start() {
    setup();
    // town();
    town();
}

function story(text) {
    var boardElement = document.getElementById("board");
    boardElement.innerHTML = text;
}

function setOptions(options) {
    var dropdown = document.getElementById("colors");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (var i = 0; i < options.length; i++) {
        var option = new Option(options[i], options[i]);
        dropdown.options.add(option);
    }
}

function delayText(text, delay) {
    var boardElement = document.getElementById("board");
    var index = 0;
    story("");
    var callback = function (text) {

        story(boardElement.innerHTML  + text[index]+ "<br />"+ "<br />");
        index += 1;
        if (index >text.length-1){
            clearInterval(timer);
        }
    }
    var timer = setInterval(function () {
        callback(text);
    }, delay);
}


function setup() {
    // setOptions();
    setOptions(["test 1", "test 2", "test3"]); 
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Submit color choices"; 
    buttonElement.onclick = function () {
    var dropdown = document.getElementById("colors");
    console.log(dropdown.value);
    checkAnswers(dropdown.value);
}
}
